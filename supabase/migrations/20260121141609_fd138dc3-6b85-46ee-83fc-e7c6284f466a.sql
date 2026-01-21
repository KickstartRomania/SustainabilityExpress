-- Create a function to check application rate limits at the database level
-- This cannot be bypassed by attackers since it runs on every INSERT
CREATE OR REPLACE FUNCTION check_application_rate_limit()
RETURNS TRIGGER AS $$
DECLARE
  recent_count INTEGER;
BEGIN
  -- Validate that email is not null (required field anyway)
  IF NEW.email IS NULL OR NEW.email = '' THEN
    RAISE EXCEPTION 'Email is required'
      USING ERRCODE = '23502'; -- not_null_violation
  END IF;
  
  -- Check submissions from same email in last hour
  SELECT COUNT(*) INTO recent_count
  FROM applications
  WHERE LOWER(email) = LOWER(NEW.email)
    AND created_at > NOW() - INTERVAL '1 hour';
  
  IF recent_count >= 3 THEN
    RAISE EXCEPTION 'Rate limit exceeded: Maximum 3 applications per hour per email'
      USING ERRCODE = '42501'; -- insufficient_privilege
  END IF;
  
  -- Check submissions from same phone in last hour (additional protection)
  SELECT COUNT(*) INTO recent_count
  FROM applications
  WHERE phone = NEW.phone
    AND created_at > NOW() - INTERVAL '1 hour';
  
  IF recent_count >= 3 THEN
    RAISE EXCEPTION 'Rate limit exceeded: Maximum 3 applications per hour per phone number'
      USING ERRCODE = '42501'; -- insufficient_privilege
  END IF;
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = public;

-- Create the trigger
CREATE TRIGGER application_rate_limit_trigger
BEFORE INSERT ON applications
FOR EACH ROW
EXECUTE FUNCTION check_application_rate_limit();

-- Add index to speed up rate limit checks
CREATE INDEX IF NOT EXISTS idx_applications_email_created_at 
ON applications(LOWER(email), created_at);

CREATE INDEX IF NOT EXISTS idx_applications_phone_created_at 
ON applications(phone, created_at);
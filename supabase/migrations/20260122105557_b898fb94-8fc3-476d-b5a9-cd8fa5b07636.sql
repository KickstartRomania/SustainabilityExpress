-- Mentor applications (public form)
CREATE TABLE IF NOT EXISTS public.mentor_applications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  linkedin text NOT NULL,
  phone text NOT NULL,
  background text NOT NULL,
  based_in text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);

-- Server-side validation
ALTER TABLE public.mentor_applications
  ADD CONSTRAINT mentor_applications_name_len CHECK (char_length(name) BETWEEN 2 AND 100),
  ADD CONSTRAINT mentor_applications_email_len CHECK (char_length(email) BETWEEN 5 AND 255),
  ADD CONSTRAINT mentor_applications_email_format CHECK (email ~* '^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$'),
  ADD CONSTRAINT mentor_applications_linkedin_len CHECK (char_length(linkedin) BETWEEN 5 AND 500),
  ADD CONSTRAINT mentor_applications_phone_len CHECK (char_length(phone) BETWEEN 8 AND 25),
  ADD CONSTRAINT mentor_applications_background_len CHECK (char_length(background) BETWEEN 10 AND 2000),
  ADD CONSTRAINT mentor_applications_based_in_len CHECK (char_length(based_in) BETWEEN 2 AND 100);

CREATE INDEX IF NOT EXISTS idx_mentor_applications_created_at ON public.mentor_applications (created_at DESC);

-- RLS: allow anyone to submit, but do not expose submissions publicly
ALTER TABLE public.mentor_applications ENABLE ROW LEVEL SECURITY;

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE schemaname='public' AND tablename='mentor_applications' AND policyname='Anyone can submit mentor applications'
  ) THEN
    CREATE POLICY "Anyone can submit mentor applications"
    ON public.mentor_applications
    FOR INSERT
    WITH CHECK (true);
  END IF;
END $$;

-- No SELECT/UPDATE/DELETE policies on purpose (admin-only via backend tooling).
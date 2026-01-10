-- Fix 1: Add RLS policies to user_roles table
-- Policy for users to view their own roles (does not call has_role to avoid recursion)
CREATE POLICY "Users can view own roles"
ON public.user_roles
FOR SELECT
TO authenticated
USING (user_id = auth.uid());

-- Policy for admins to manage all roles (uses has_role which is SECURITY DEFINER)
CREATE POLICY "Admins can manage roles"
ON public.user_roles
FOR ALL
TO authenticated
USING (public.has_role(auth.uid(), 'admin'))
WITH CHECK (public.has_role(auth.uid(), 'admin'));

-- Bootstrap policy for initial admin creation (only works if no admin exists yet)
CREATE POLICY "Allow initial admin setup"
ON public.user_roles
FOR INSERT
TO authenticated
WITH CHECK (
  role = 'admin'
  AND NOT EXISTS (SELECT 1 FROM public.user_roles WHERE role = 'admin')
);

-- Fix 2: Add database constraints for input validation on applications table
-- Length constraints
ALTER TABLE public.applications 
  ADD CONSTRAINT name_length CHECK (length(name) >= 2 AND length(name) <= 100),
  ADD CONSTRAINT email_length CHECK (length(email) <= 255),
  ADD CONSTRAINT phone_length CHECK (length(phone) >= 8 AND length(phone) <= 20),
  ADD CONSTRAINT motivation_length CHECK (length(motivation) >= 10 AND length(motivation) <= 250),
  ADD CONSTRAINT idea_length CHECK (idea IS NULL OR length(idea) <= 500),
  ADD CONSTRAINT accessibility_length CHECK (accessibility IS NULL OR length(accessibility) <= 500),
  ADD CONSTRAINT portfolio_length CHECK (portfolio IS NULL OR length(portfolio) <= 500);

-- Enum constraints for role and skill_level
ALTER TABLE public.applications
  ADD CONSTRAINT valid_role CHECK (role IN ('developer', 'designer', 'product', 'business', 'sustainability', 'other')),
  ADD CONSTRAINT valid_skill_level CHECK (skill_level IN ('student', 'junior', 'mid', 'senior')),
  ADD CONSTRAINT valid_status CHECK (status IN ('pending', 'accepted', 'rejected'));
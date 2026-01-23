-- =============================================
-- APPLICATIONS TABLE
-- =============================================

-- Drop existing RLS policy that references 'name'
DROP POLICY IF EXISTS "Anyone can submit applications" ON public.applications;

-- Drop the name column and add first_name, last_name
ALTER TABLE public.applications DROP COLUMN name;
ALTER TABLE public.applications ADD COLUMN first_name TEXT NOT NULL;
ALTER TABLE public.applications ADD COLUMN last_name TEXT NOT NULL;

-- Recreate INSERT policy with first_name/last_name validation
CREATE POLICY "Anyone can submit applications"
ON public.applications FOR INSERT
WITH CHECK (
  first_name IS NOT NULL AND btrim(first_name) <> '' 
  AND char_length(btrim(first_name)) >= 1 AND char_length(btrim(first_name)) <= 50
  AND last_name IS NOT NULL AND btrim(last_name) <> '' 
  AND char_length(btrim(last_name)) >= 1 AND char_length(btrim(last_name)) <= 50
  AND email IS NOT NULL AND btrim(email) <> '' AND char_length(btrim(email)) <= 255
  AND phone IS NOT NULL AND btrim(phone) <> '' 
  AND char_length(btrim(phone)) >= 8 AND char_length(btrim(phone)) <= 25
  AND role IS NOT NULL AND btrim(role) <> ''
  AND skill_level IS NOT NULL AND btrim(skill_level) <> ''
  AND motivation IS NOT NULL AND btrim(motivation) <> ''
  AND code_of_conduct = true
  AND photo_consent = true
);

-- =============================================
-- MENTOR_APPLICATIONS TABLE
-- =============================================

-- Drop existing RLS policy that references 'name'
DROP POLICY IF EXISTS "Anyone can submit mentor applications" ON public.mentor_applications;

-- Drop the name column and add first_name, last_name
ALTER TABLE public.mentor_applications DROP COLUMN name;
ALTER TABLE public.mentor_applications ADD COLUMN first_name TEXT NOT NULL;
ALTER TABLE public.mentor_applications ADD COLUMN last_name TEXT NOT NULL;

-- Recreate INSERT policy with first_name/last_name validation
CREATE POLICY "Anyone can submit mentor applications"
ON public.mentor_applications FOR INSERT
WITH CHECK (
  first_name IS NOT NULL AND btrim(first_name) <> '' 
  AND char_length(btrim(first_name)) >= 1 AND char_length(btrim(first_name)) <= 50
  AND last_name IS NOT NULL AND btrim(last_name) <> '' 
  AND char_length(btrim(last_name)) >= 1 AND char_length(btrim(last_name)) <= 50
  AND email IS NOT NULL AND btrim(email) <> '' AND char_length(btrim(email)) <= 255
  AND linkedin IS NOT NULL AND btrim(linkedin) <> '' AND char_length(btrim(linkedin)) <= 500
  AND phone IS NOT NULL AND btrim(phone) <> '' 
  AND char_length(btrim(phone)) >= 8 AND char_length(btrim(phone)) <= 25
  AND background IS NOT NULL AND btrim(background) <> '' 
  AND char_length(btrim(background)) >= 10 AND char_length(btrim(background)) <= 2000
  AND based_in IS NOT NULL AND btrim(based_in) <> '' 
  AND char_length(btrim(based_in)) >= 2 AND char_length(btrim(based_in)) <= 100
);
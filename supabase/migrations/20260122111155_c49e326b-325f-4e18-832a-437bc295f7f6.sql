-- Tighten permissive INSERT RLS policies (avoid WITH CHECK (true))

-- applications
DROP POLICY IF EXISTS "Anyone can submit applications" ON public.applications;
CREATE POLICY "Anyone can submit applications"
ON public.applications
FOR INSERT
WITH CHECK (
  name IS NOT NULL AND btrim(name) <> '' AND char_length(btrim(name)) BETWEEN 2 AND 100
  AND email IS NOT NULL AND btrim(email) <> '' AND char_length(btrim(email)) <= 255
  AND phone IS NOT NULL AND btrim(phone) <> '' AND char_length(btrim(phone)) BETWEEN 8 AND 25
  AND role IS NOT NULL AND btrim(role) <> ''
  AND skill_level IS NOT NULL AND btrim(skill_level) <> ''
  AND motivation IS NOT NULL AND btrim(motivation) <> ''
  AND code_of_conduct = true
  AND photo_consent = true
);

-- mentor_applications
DROP POLICY IF EXISTS "Anyone can submit mentor applications" ON public.mentor_applications;
CREATE POLICY "Anyone can submit mentor applications"
ON public.mentor_applications
FOR INSERT
WITH CHECK (
  name IS NOT NULL AND btrim(name) <> '' AND char_length(btrim(name)) BETWEEN 2 AND 100
  AND email IS NOT NULL AND btrim(email) <> '' AND char_length(btrim(email)) <= 255
  AND linkedin IS NOT NULL AND btrim(linkedin) <> '' AND char_length(btrim(linkedin)) <= 500
  AND phone IS NOT NULL AND btrim(phone) <> '' AND char_length(btrim(phone)) BETWEEN 8 AND 25
  AND background IS NOT NULL AND btrim(background) <> '' AND char_length(btrim(background)) BETWEEN 10 AND 2000
  AND based_in IS NOT NULL AND btrim(based_in) <> '' AND char_length(btrim(based_in)) BETWEEN 2 AND 100
);
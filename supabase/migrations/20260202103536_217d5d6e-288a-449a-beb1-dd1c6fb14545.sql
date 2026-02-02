-- Create partner_inquiries table
CREATE TABLE public.partner_inquiries (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  company TEXT NOT NULL,
  sponsor_type TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.partner_inquiries ENABLE ROW LEVEL SECURITY;

-- Anyone can submit partner inquiries (public form)
CREATE POLICY "Anyone can submit partner inquiries"
ON public.partner_inquiries
FOR INSERT
WITH CHECK (
  first_name IS NOT NULL AND btrim(first_name) <> '' AND char_length(btrim(first_name)) >= 2 AND char_length(btrim(first_name)) <= 50
  AND last_name IS NOT NULL AND btrim(last_name) <> '' AND char_length(btrim(last_name)) >= 2 AND char_length(btrim(last_name)) <= 50
  AND email IS NOT NULL AND btrim(email) <> '' AND char_length(btrim(email)) <= 255
  AND phone IS NOT NULL AND btrim(phone) <> '' AND char_length(btrim(phone)) >= 8 AND char_length(btrim(phone)) <= 25
  AND company IS NOT NULL AND btrim(company) <> '' AND char_length(btrim(company)) >= 2 AND char_length(btrim(company)) <= 100
  AND sponsor_type IS NOT NULL AND btrim(sponsor_type) <> ''
);

-- Admins can view partner inquiries
CREATE POLICY "Admins can view partner inquiries"
ON public.partner_inquiries
FOR SELECT
USING (has_role(auth.uid(), 'admin'::app_role));

-- Admins can update partner inquiries
CREATE POLICY "Admins can update partner inquiries"
ON public.partner_inquiries
FOR UPDATE
USING (has_role(auth.uid(), 'admin'::app_role));

-- Admins can delete partner inquiries
CREATE POLICY "Admins can delete partner inquiries"
ON public.partner_inquiries
FOR DELETE
USING (has_role(auth.uid(), 'admin'::app_role));
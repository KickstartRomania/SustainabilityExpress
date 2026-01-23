-- Add admin policies for mentor_applications table to allow admins to manage submissions

-- Admin can view all mentor applications
CREATE POLICY "Admins can view mentor applications"
ON public.mentor_applications
FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- Admin can update mentor applications
CREATE POLICY "Admins can update mentor applications"
ON public.mentor_applications
FOR UPDATE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- Admin can delete mentor applications
CREATE POLICY "Admins can delete mentor applications"
ON public.mentor_applications
FOR DELETE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));
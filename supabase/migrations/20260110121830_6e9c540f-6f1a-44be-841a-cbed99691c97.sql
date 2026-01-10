-- Create applications table for storing form submissions
CREATE TABLE public.applications (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  role TEXT NOT NULL,
  skill_level TEXT NOT NULL,
  portfolio TEXT,
  motivation TEXT NOT NULL,
  idea TEXT,
  accessibility TEXT,
  code_of_conduct BOOLEAN NOT NULL DEFAULT false,
  photo_consent BOOLEAN NOT NULL DEFAULT false,
  status TEXT NOT NULL DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.applications ENABLE ROW LEVEL SECURITY;

-- Allow anyone to submit an application (public form)
CREATE POLICY "Anyone can submit applications"
ON public.applications
FOR INSERT
WITH CHECK (true);

-- Create app_role enum for admin access
CREATE TYPE public.app_role AS ENUM ('admin', 'user');

-- Create user_roles table for role-based access
CREATE TABLE public.user_roles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  role app_role NOT NULL,
  UNIQUE (user_id, role)
);

-- Enable RLS on user_roles
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- Create security definer function to check roles
CREATE OR REPLACE FUNCTION public.has_role(_user_id UUID, _role app_role)
RETURNS BOOLEAN
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.user_roles
    WHERE user_id = _user_id
      AND role = _role
  )
$$;

-- Allow admins to view all applications
CREATE POLICY "Admins can view all applications"
ON public.applications
FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- Allow admins to update applications
CREATE POLICY "Admins can update applications"
ON public.applications
FOR UPDATE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- Allow admins to delete applications
CREATE POLICY "Admins can delete applications"
ON public.applications
FOR DELETE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));
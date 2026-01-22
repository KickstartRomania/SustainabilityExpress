-- Fix: remove vulnerable initial admin bootstrap policy
DO $$
BEGIN
  -- Drop the weak policy if it exists
  IF EXISTS (
    SELECT 1
    FROM pg_policies
    WHERE schemaname = 'public'
      AND tablename = 'user_roles'
      AND policyname = 'Allow initial admin setup'
  ) THEN
    EXECUTE 'DROP POLICY "Allow initial admin setup" ON public.user_roles';
  END IF;
END $$;

-- Ensure RLS remains enabled (safe/idempotent)
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;
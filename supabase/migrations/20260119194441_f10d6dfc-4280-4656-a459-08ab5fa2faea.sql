-- Drop the old constraint and create a new one with all valid roles
ALTER TABLE public.applications DROP CONSTRAINT IF EXISTS valid_role;

ALTER TABLE public.applications ADD CONSTRAINT valid_role CHECK (
  role = ANY (ARRAY[
    -- Tech roles
    'software_developer'::text,
    'web_developer'::text,
    'data_analyst'::text,
    'ai_ml_engineer'::text,
    'devops'::text,
    'qa_engineer'::text,
    'cybersecurity'::text,
    'ux_ui_designer'::text,
    'product_engineer'::text,
    'it_support'::text,
    'other_tech'::text,
    -- Business roles
    'business_analyst'::text,
    'product_manager'::text,
    'project_manager'::text,
    'operations_manager'::text,
    'consultant'::text,
    'entrepreneur'::text,
    'sales_bd'::text,
    'financial_analyst'::text,
    'investment_vc'::text,
    'supply_chain'::text,
    'other_business'::text,
    -- Communication roles
    'marketing_specialist'::text,
    'digital_marketing'::text,
    'content_creator'::text,
    'social_media'::text,
    'brand_manager'::text,
    'pr_communications'::text,
    'community_manager'::text,
    'growth_marketer'::text,
    'employer_branding'::text,
    'events_partnerships'::text,
    'other_communication'::text,
    -- Teenager
    'teenager'::text,
    -- Legacy roles (keep for backward compatibility)
    'developer'::text,
    'designer'::text,
    'product'::text,
    'business'::text,
    'sustainability'::text,
    'other'::text
  ])
);
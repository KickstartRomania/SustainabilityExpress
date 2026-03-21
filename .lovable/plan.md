

## Plan: Add n8n Webhook (Keep Make as Fallback)

### Overview
Create a new edge function `send-to-n8n` that mirrors the existing `send-to-make` function but posts to n8n. Update the Apply page to call n8n instead of Make. The Make function and secret remain untouched.

### Steps

1. **Add n8n webhook URL as a secret**
   - Store `N8N_WEBHOOK_URL` = `https://n8n.veridion.com/webhook/d3ed70b8-a383-47bb-aa93-0c15b48cbc33` as a backend secret

2. **Create new edge function `send-to-n8n`**
   - File: `supabase/functions/send-to-n8n/index.ts`
   - Same structure as `send-to-make` but reads `N8N_WEBHOOK_URL` secret
   - CORS headers, POST forwarding, error handling — identical pattern

3. **Register function in config**
   - Add `[functions.send-to-n8n]` with `verify_jwt = false` to `supabase/config.toml`

4. **Update Apply page to call n8n**
   - Change the webhook call from `send-to-make` to `send-to-n8n`
   - Update the comment and error log message
   - The Make function stays deployed but unused

### Technical Details
- The payload sent to n8n will be identical to what Make currently receives (firstName, lastName, email, phone, role, skill_level, portfolio, motivation, idea, accessibility, submitted_at)
- The `send-to-make` function and `MAKE_WEBHOOK_URL` secret are preserved for easy rollback




## Plan: Roll Back to Make Webhook

### Overview
Switch the Apply page back to calling `send-to-make` instead of `send-to-n8n`. The n8n function and secret stay in place for later.

### Steps

1. **Update Apply.tsx** (lines ~115-116)
   - Change comment from "n8n" to "Make.com"
   - Change endpoint from `send-to-n8n` to `send-to-make`
   - Update the error log message

No other files need changes. Both edge functions and secrets remain deployed.


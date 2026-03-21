const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const webhookUrl = Deno.env.get('N8N_WEBHOOK_URL');
    if (!webhookUrl) {
      throw new Error('N8N_WEBHOOK_URL not configured');
    }

    const applicationData = await req.json();

    console.log('Sending application to n8n:', applicationData.email);

    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(applicationData),
    });

    const responseText = await response.text();

    if (!response.ok) {
      console.error('n8n error response:', responseText);
      throw new Error(`n8n responded with ${response.status}`);
    }

    console.log('Successfully sent to n8n');

    return new Response(
      JSON.stringify({ success: true }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Webhook error:', error);
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});

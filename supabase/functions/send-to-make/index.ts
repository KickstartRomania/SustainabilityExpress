const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

Deno.serve(async (req) => {
  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const webhookUrl = Deno.env.get('MAKE_WEBHOOK_URL');
    if (!webhookUrl) {
      throw new Error('MAKE_WEBHOOK_URL not configured');
    }

    const applicationData = await req.json();

    console.log('Sending application to Make.com:', applicationData.email);

    // Send to Make.com webhook
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(applicationData),
    });

    // Consume response body to prevent resource leak
    const responseText = await response.text();

    if (!response.ok) {
      console.error('Make.com error response:', responseText);
      throw new Error(`Make.com responded with ${response.status}`);
    }

    console.log('Successfully sent to Make.com');

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

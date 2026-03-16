export default {
  async fetch(request, env) {
    // Check KV binding exists
    if (!env.BGP_Sandbox_KV) {
      return new Response("KV binding not found!", { status: 500 })
    }

    // Write to KV
    await env.BGP_Sandbox_KV.put("message", "I am new KV 🚀")

    // Read from KV
    const message = await env.BGP_Sandbox_KV.get("message")

    return new Response(message, { headers: { "Content-Type": "text/plain" } })
  }
}
export default {
  async fetch(request, env) {
    try {
      // Save to KV
      await env.cloudflare.put("message", "Hello from KV I am from github 🚀")

      // Read from KV
      const message = await env.cloudflare.get("message")

      // Return as plain text
      return new Response(message, {
        headers: { "Content-Type": "text/plain" }
      })

    } catch (err) {
      return new Response("Worker error: " + err.message, {
        status: 500,
        headers: { "Content-Type": "text/plain" }
      })
    }
  }
}
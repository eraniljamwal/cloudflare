export default {
  async fetch(request, env) {
    try {
      if (!env.SANDBOX_KV) {
        return new Response("KV binding not found!", { status: 500 });
      }

      const url = new URL(request.url);

      if (url.pathname === "/api/message") {
        // Example: store a value in KV
        await env.SANDBOX_KV.put("message", "Hello from KV New test 123 🚀");

        // Retrieve the value
        const message = await env.SANDBOX_KV.get("message") || "No value yet";

        return new Response(JSON.stringify({ message }), {
          headers: { "Content-Type": "application/json" }
        });
      }

      // Default: frontend placeholder
      return new Response("Worker running. Use /api/message", {
        headers: { "Content-Type": "text/plain" }
      });

    } catch (err) {
      return new Response("Worker error: " + err.message, { status: 500 });
    }
  }
}
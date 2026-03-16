export default {
  async fetch(request, env) {
    // write a key-value pair
    await env.KV.put('KEY', 'VALUE');

    // read a key-value pair
    const value = await env.KV.get('KEY');

    // list all key-value pairs
    const allKeys = await env.KV.list();

    // return a Workers response
    return new Response(JSON.stringify({ value, allKeys }), {
      headers: { 'Content-Type': 'application/json' },
    });
  },
};
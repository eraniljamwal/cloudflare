import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  

  return (
    <div>
      <h1>React + Cloudflare Worker KV</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;

import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("/api/message")   // This calls the Worker API
      .then(res => res.json())
      .then(data => setMessage(data.message))
      .catch(err => setMessage("Error: " + err.message));
  }, []);

  return (
    <div>
      <h1>React + Cloudflare Worker KV</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;
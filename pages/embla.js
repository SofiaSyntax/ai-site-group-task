import { model } from "@/util/ai";
import { useState } from "react";

export default function Recipes() {
  const [prompt, setPrompt] = useState("");
  const [answer, setAnswer] = useState("");

  async function sendPrompt() {
    const result = await model.generateContent(prompt);

    setAnswer(result.response.text());
  }

  return (
    <div>
      <h2>Recipes suggestions</h2>
      <input
        className="border"
        type="text"
        onChange={(e) => {
          setPrompt(e.target.value);
        }}
      />
      <button onClick={sendPrompt}>Send</button>
      <p>{answer}</p>
    </div>
  );
}

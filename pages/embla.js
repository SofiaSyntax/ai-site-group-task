import { model } from "@/util/ai";
import { useState } from "react";

export default function Recipes() {
  const [prompt, setPrompt] = useState("");
  const [answer, setAnswer] = useState("");

  async function sendPrompt() {
    const result = await model.generateContent(prompt);
    const answerText = result.response.text();
    setAnswer(answerText);
  }

  return (
    <div>
      <h2>Recipe suggestions</h2>
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

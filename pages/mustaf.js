import { model } from "@/util/ai";

export default function Books() {}

import { useState } from "react";

const BookSuggestions = () => {
  const [prompt, setPrompt] = useState("");
  const [answer, setAnswer] = useState("");

  const sendPrompt = async () => {
    const { response } = await model.generateContent(prompt);
    setAnswer(response.text());
  };

  return (
    <div>
      <h2>Book Suggestions</h2>
      <input
        className="border"
        type="text"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />
      <button onClick={sendPrompt}>Send</button>
      <p>{answer}</p>
    </div>
  );
};

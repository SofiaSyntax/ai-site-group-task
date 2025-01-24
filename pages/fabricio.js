import { model } from "@/util/ai";
import { useEffect, useState } from "react";
import Card from "@/pages/MovieCard";

export default function Movies() {
  const [prompt, setPrompt] = useState("");
  const [answer, setAnswer] = useState("");

  async function sendOnPageLoad(question) {
    const result = await model.generateContent(question);
    setAnswer(result.response.text());
  }

  useEffect(() => {
    sendOnPageLoad("top 3 skräck filmer i imdb?");
  }, []);

  return (
    <div>
      <h2>Top 3 movies for each catogery</h2>
      <button>
        <Card></Card>
      </button>
    </div>
  );
}

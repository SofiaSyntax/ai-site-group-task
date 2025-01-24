import { model } from "@/util/ai";
import { useState } from "react";

const startPrompt = " give me 3 random movies from category: ";

export default function Movies() {
  const [answer, setAnswer] = useState("");

  async function sendMoviePrompt(category) {
    const prompt = startPrompt + category;
    const result = await model.generateContent(prompt);
    setAnswer(result.response.text());
  }

  return (
    <div>
      <h2 className="flex justify-center pt-4 font-bold">
        3 random movies for each category
      </h2>

      <div className="md:grid md:grid-cols-3 md:justify-center gap-16 m-12 flex flex-col items-center">
        {["Komedi", "Skräck", "Action", "Drama", "Sport", "Sci-fi"].map(
          (category) => (
            <button key={category} onClick={() => sendMoviePrompt(category)}>
              <div className="card bg-base-100 w-80 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title flex justify-center">{category}</h2>
                </div>
              </div>
            </button>
          )
        )}
      </div>
      <p>{answer}</p>
    </div>
  );
}

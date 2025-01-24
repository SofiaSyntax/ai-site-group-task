import { model } from "@/util/ai";
import { useState } from "react";

const startPrompt = "Give me recommendations for music based on this genre: ";
// const endPrompt = " Give me the answer as a JSON with the following data: artist name, song name, and duration of the song.";

export default function Music() {
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false); // For handling loading state

  async function sendPrompt(genre) {
    const prompt = startPrompt + genre; // + endPrompt to include additional prompt if needed
    const result = await model.generateContent(prompt);
    const answerText = result.response.text();
    setAnswer(answerText);
  }

  return (
    <div>
      <h1 className="text-4xl">AI Music Recommendations</h1>
      <h2 className="text-2xl">
        Choose a genre and AI will recommend songs based on your choice
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {["Pop", "Jazz", "Rock", "Hip-Hop", "Classical"].map((genre) => (
          <div
            key={genre}
            className="card lg:card-side bg-base-100 shadow-xl cursor-pointer"
            onClick={() => sendPrompt(genre)}
          >
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"
                alt="Album"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{genre}</h2>
              <p>Click to explore {genre} music recommendations.</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Explore</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {loading && <p>Loading...</p>}

      <div className="mt-4">
        <h3 className="text-2xl font-bold">Recommendations:</h3>
        <p>{answer}</p>
      </div>
    </div>
  );
}

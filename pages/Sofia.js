import { model } from "@/util/ai";
import { useState } from "react";

const startPrompt = "Give me 5 recommendations for songs based on this genre: ";
const endPrompt =
  "Give me the answer as plain text with the following information: song name by artist name and after each artist name use punctuation. ";

export default function Music() {
  const [answer, setAnswer] = useState("");

  async function sendPrompt(genre) {
    const prompt = startPrompt + genre + endPrompt;
    const result = await model.generateContent(prompt);
    const answerText = result.response.text();
    setAnswer(answerText);
  }

  return (
    <div
      className="grid bg-cover bg-center"
      style={{
        backgroundImage:
          "url(https://img.freepik.com/free-photo/simple-smooth-fabric-textured-background_53876-108254.jpg?ga=GA1.1.1667245943.1733688417)",
      }}
    >
      <div className="text-center m-10">
        <h1 className="text-4xl ">AI Music Recommendations</h1>
        <h2 className="text-2xl">
          Choose a genre and AI will recommend songs based on your choice
        </h2>
      </div>

      <div className="flex flex-col-reverse md:flex-col">
        <div className="md:grid md:grid-cols-3 md:justify-center md:gap-14 md:m-6 flex flex-wrap gap-8 m-4 pt-2 justify-center">
          {[
            "Pop",
            "Jazz",
            "Rock",
            "Hip-Hop",
            "R&B",
            "Metal",
            "K-pop",
            "Techno",
            "Classical",
          ].map((genre) => (
            <div
              key={genre}
              className="card shadow-xl bg-slate-900 hover:bg-slate-950"
              onClick={() => sendPrompt(genre)}
            >
              <div className="card-body">
                <h2 className="card-title">{genre}</h2>
                <h3>Get five {genre}-song recommendations</h3>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">
                    Recommend me songs!
                  </button>
                </div>
              </div>
            </div>
          ))}
          <div className="mt-5 ">
            <h3 className="text-2xl font-bold">Check out:</h3>
            <p>{answer}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

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
      <div
        className="grid w-full bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://img.freepik.com/premium-vector/abstract-technology-particles-lines-background_907220-2036.jpg?ga=GA1.1.1667245943.1733688417&semt=ais_hybrid)",
        }}
      >
        <h2 className="flex justify-center pt-4 text-2xl font-semibold ">
          Get 3 random movies to watch from each category:
        </h2>
        <div className="md:grid md:grid-cols-3 md:justify-center md:gap-16 md:m-6 flex flex-wrap gap-8 m-4 justify-center ">
          {[
            "Comedy",
            "Thriller",
            "Action",
            "Drama",
            "Sport",
            "Romance",
            "Anime",
            "Crime",
            "Sci-fi",
          ].map((category) => (
            <button key={category} onClick={() => sendMoviePrompt(category)}>
              <div className="card bg-slate-800 shadow-xl hover:bg-slate-900">
                <div className="card-body">
                  <h2 className="card-title flex justify-center">{category}</h2>
                </div>
              </div>
            </button>
          ))}
        </div>

        <div>
          <h3 className=" text-2xl font-semibold px-6">Movies:</h3>
          <p className=" font-medium m-4">{answer}</p>
        </div>
      </div>
    </div>
  );
}

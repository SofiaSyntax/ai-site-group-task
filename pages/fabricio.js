import { model } from "@/util/ai";
import { useState } from "react";

const startPrompt = " give me 5 movie recommendations based on this genre: ";
const endPrompt =
  "Give me the answer as plain text in list of 1-5 with the following information: movie title, director and release date and after each movie title use punctuation. ";

export default function Movies() {
  const [answer, setAnswer] = useState("");

  async function sendMoviePrompt(category) {
    const prompt = startPrompt + category + endPrompt;
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
        <h1 className="text-4xl ">AI movie recommendations</h1>
        <h2 className="text-2xl">
          Choose a genre, and AI will recommend some movies for you to watch
        </h2>
      </div>

      <div className="flex flex-col-reverse">
        <div className="md:grid md:grid-cols-3 md:justify-center md:gap-14 md:m-6 grid grid-cols-1 gap-8 m-4 pt-2 justify-center">
          {[
            "Comedy",
            "Thriller",
            "Action",
            "Drama",
            "Sport",
            "Romance",
            "Anime",
            "Horror",
            "Sci-fi",
          ].map((category) => (
            <div key={category} onClick={() => sendMoviePrompt(category)}>
              <div className="card shadow-xl bg-slate-900 hover:bg-slate-950 ">
                <div className="card-body">
                  <h2 className="card-title">{category}</h2>
                  <h3>Get {category} movies</h3>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">Recommend</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <div className="max-w-96">
            <div classNameard shadow-xl bg-slate-900 hover:bg-slate-950">
              <h3 className="text-2xl font-bold text-center px-6 whitespace-pre-wrap">
                Movie recommendations:
              </h3>
              <div className="m-2 font-semibold">{answer}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

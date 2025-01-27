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
    <div>
      <div
        className="grid bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://img.freepik.com/free-photo/simple-smooth-fabric-textured-background_53876-108254.jpg?ga=GA1.1.1667245943.1733688417)",
        }}
      >
        <h2 className="flex justify-center text-xl pt-4 md:text-2xl font-semibold ">
          Choose a genre, and AI will recommend some movies for you to watch
        </h2>

        <div className="md:grid md:grid-cols-3 md:justify-center md:gap-14 md:m-6 flex flex-wrap gap-8 m-4 pt-2 justify-center ">
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
                  <div className="card-actions md:justify-end justify-center">
                    <button className="btn btn-primary">recommend</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="m-4">
          <h3 className=" text-2xl font-semibold px-6">
            Movie recommendations:
          </h3>
          <p className="m-4 font-semibold">{answer}</p>
        </div>
      </div>
    </div>
  );
}

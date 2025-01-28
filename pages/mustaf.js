import { model } from "@/util/ai";
import { useState } from "react";

const startPrompt = " give me 5 book recommendations based on this genre: ";

export default function Books() {
  const [answer, setAnswer] = useState("");

  async function sendBookPrompt(category) {
    const prompt = startPrompt + category;
    const result = await model.generateContent(prompt);
    setAnswer(result.response.text());
  }

  return (
    <div>
      <div
        className="grid bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://img.freepik.com/free-photo/simple-smooth-fabric-textured-background_53876-108254.jpg?ga=GA1.1.1667245943.1733688417)",
        }}>
        <div className="text-center m-10">
          <h1 className="text-4xl ">AI book recommendations</h1>
          <h2 className="text-2xl">
            Select a genre, and get book recommendations from AI to read
          </h2>
        </div>

        <h2 className="flex justify-center text-xl pt-4 md:text-2xl font-semibold "></h2>
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
              <div key={category} onClick={() => sendBookPrompt(category)}>
                <div className="card shadow-xl bg-slate-900 hover:bg-slate-950 ">
                  <div className="card-body">
                    <h2 className="card-title">{category}</h2>
                    <h3>Choose from</h3>
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
              <div className="card shadow-xl bg-slate-900 hover:bg-slate-950">
                <h3 className="text-2xl font-bold text-center px-6 whitespace-pre-wrap">
                  Book recommendations:
                </h3>
                <div className="m-2 font-semibold">{answer}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

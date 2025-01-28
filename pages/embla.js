import { model } from "@/util/ai";
import { useEffect, useState } from "react";

const startPrompt = "30 minute recipe suggestion cooking with: ";
const endPrompt =
  " give the answer in plain text with the following data: name of the meal, ingredient list, and step-by-steps.";

export default function Recipes() {
  const [answer, setAnswer] = useState("");
  const [history, setHistory] = useState([]);

  async function sendPrompt(food) {
    const prompt = startPrompt + food + endPrompt;
    const result = await model.generateContent(prompt);
    const answerText = result.response.text();
    setAnswer(answerText);

    const newHistory = [...history];
    newHistory.push({ prompt, answer: answerText });
    setHistory(newHistory);
  }

  useEffect(() => {
    if (history.length > 0) {
      localStorage.setItem("history", JSON.stringify(history));
    }
  }, [history]);

  return (
    <div
      className="grid bg-cover bg-center"
      style={{
        backgroundImage:
          "url(https://img.freepik.com/free-photo/simple-smooth-fabric-textured-background_53876-108254.jpg?ga=GA1.1.1667245943.1733688417)",
      }}>
      <div className="text-center m-10">
        <h1 className="text-4xl">AI recipe recommendations</h1>
        <h2 className="text-2xl ">
          Choose a food group and AI will recommend quick recipes based on your
          choice
        </h2>
      </div>
      <div className="flex flex-col-reverse">
        <div className="md:grid md:grid-cols-3 md:justify-center md:gap-14 md:m-6 grid grid-cols-1 gap-8 m-4 pt-2 justify-center">
          {[
            "Chicken",
            "Beef",
            "Pork",
            "Tofu",
            "Beans",
            "Shrimp",
            "Salmon",
            "Cod",
            "Halloumi",
          ].map((food) => (
            <div key={food} onClick={() => sendPrompt(food)}>
              <div className="card shadow-xl bg-slate-900 hover:bg-slate-950">
                <div className="card-body">
                  <h2 className="card-title">{food}</h2>
                  <h3>Get a {food} recipe</h3>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">
                      Give me a recipe
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-5 flex justify-center">
          <div className="card shadow-xl bg-slate-900 hover:bg-slate-950 m-10 max-w-96">
            <h3 className="text-2xl font-bold text-center px-6 whitespace-pre-wrap">
              30 minute recipe:
            </h3>
            <div className="">
              <pre className="px-6 whitespace-pre-wrap font-semibold font-sans">
                {answer}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

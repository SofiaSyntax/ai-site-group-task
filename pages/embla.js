import { model } from "@/util/ai";
import { useEffect, useState } from "react";

const startPrompt = "30 minute recipe suggestion cooking with:";
// const endPrompt =
//   " give me a json for the name of the meal, ingredient list, and step-by-steps ";

export default function Recipes() {
  const [answer, setAnswer] = useState("");
  const [history, setHistory] = useState([]);

  async function sendPrompt(food) {
    const prompt = startPrompt + food;
    const result = await model.generateContent(prompt);
    const answerText = result.response.text();
    setAnswer(answerText);

    const jsonAnswer = answerText;
    console.log(jsonAnswer);

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
      <h2 className="flex justify-center text-xl pt-4 md:text-2xl font-semibold ">
        30-minute recipe suggestions
      </h2>
      <div className="md:grid md:grid-cols-3 md:justify-center md:gap-14 md:m-6 flex flex-wrap gap-8 m-4 pt-2 justify-center ">
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
                <h3>Get {food} recipes</h3>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Give me a recipe</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <h3 className=" text-2xl font-semibold px-6">30 minute recipe:</h3>
      <p>{answer}</p>
    </div>
  );
}

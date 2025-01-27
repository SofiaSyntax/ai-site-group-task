import { model } from "@/util/ai";
import { useEffect, useState } from "react";

const startPrompt = "30 minute recipe suggestion cooking with:";
const endPrompt =
  " give me a json for the ingredients, step-by-steps, and name of the meal";

export default function Recipes() {
  // const [prompt, setPrompt] = useState("");
  const [answer, setAnswer] = useState("");
  // const [history, setHistory] = useState([]);

  async function sendPrompt(food) {
    const prompt = startPrompt + food + endPrompt;
    const result = await model.generateContent(prompt);
    const answerText = result.response.text();
    setAnswer(answerText);

    // const newHistory = [...history];
    // newHistory.push({ prompt, answer: answerText });
    // setHistory(newHistory);
  }

  async function sendOnPageLoad(question) {
    const result = await model.generateContent(question);
    setAnswer(result.response.text());
  }

  

  // useEffect(() => {
  //   sendOnPageLoad("give me a 30 minute recipe suggestion cooking with:");
  // }, []);

  // useEffect(() => {
  //   if (history.length > 0) {
  //     localStorage.setItem("history", JSON.stringify(history));
  //   }
  // }, [history]);

  return (
    <div>
      <h2 className="text-xl flex justify-center p-4">
        30-minute recipe suggestions
      </h2>
      {/* <input
        className="border"
        type="text"
        onChange={(e) => {
          setPrompt(e.target.value);
        }}
      /> */}
      <div className="grid grid-cols-2 md:grid-cols-3 md:grid gap-2 p-2">
        {[
          "Chicken",
          "Beef",
          "Pork",
          "Tofu",
          "Beans",
          "Shrimp",
          "Salmon",
          "Cod",
        ].map((food) => (
          <button key={food} onClick={() => sendPrompt(food)}>
            <div className="card bg-slate-800 shadow-xl hover:bg-slate-900">
              <div className="card-body">
                <h2 className="card-title flex justify-center">{food}</h2>
              </div>
            </div>
          </button>
        ))}
      </div>

      {/*Add "Loading..."*/}
      <p>{answer}</p>
    </div>
  );
}

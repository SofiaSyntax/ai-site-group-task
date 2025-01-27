import { model } from "@/util/ai";
import { useEffect, useState } from "react";

const startPrompt = "30 minute recipe suggestion cooking with:";
const endPrompt =
  " give me a json for the name of the meal, ingredient list, and step-by-steps ";

export default function Recipes() {
  // const [prompt, setPrompt] = useState("");
  const [answer, setAnswer] = useState("");
  const [history, setHistory] = useState([]);

  async function sendPrompt(food) {
    const prompt = startPrompt + food + endPrompt;
    const result = await model.generateContent(prompt);
    const answerText = result.response.text();
    setAnswer(answerText);

    const jsonAnswer = answerText;
    console.log(jsonAnswer);

    // try {
    //   const parsedAnswer = JSON.parse(answerText);
    //   console.log(parsedAnswer);
    //   setAnswer(parsedAnswer);
    // } catch (error) {
    //   console.error("Error parsing json:", error);
    //   setAnswer(null);
    // }

    const newHistory = [...history];
    newHistory.push({ prompt, answer: answerText });
    setHistory(newHistory);
  }

  // async function sendOnPageLoad(question) {
  //   const result = await model.generateContent(question);
  //   setAnswer(result.response.text());
  // }

  // useEffect(() => {
  //   sendOnPageLoad("give me a 30 minute recipe suggestion cooking with:");
  // }, []);

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
          "url(https://img.freepik.com/free-vector/purple-color-background-gradient-modern-design-abstract_343694-2146.jpg?t=st=1737985733~exp=1737989333~hmac=e69f8013ddf485d7546c4d50de652cd3f3c076872ed4dc55412b646574f0b363&w=740)",
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
                <h3>Get {food} recommendations</h3>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">recommend</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <p>{answer}</p>
    </div>
  );
}

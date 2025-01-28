import { model } from "@/util/ai";
import { useState } from "react";

const startPrompt =
  "Generate a random quiz question in plain text on the topic: ";
const endPrompt =
  ". Provide the question in plain text. Then, provide three options in plain text where Option 1 is the correct answer, Option 2 and Option 3 are incorrect but reasonable answers. Output the question in plain text, followed by options like: A: ..., B: ..., C: ....";

export default function Quiz() {
  const [topic, setTopic] = useState(""); // Välj ämne och uppdatera med ämne
  const [question, setQuestion] = useState(null); // Generera fråga, då den saknas initialt är den satt till null.
  const [feedback, setFeedback] = useState(""); // Visa feedback rätt/korrekt svar, initialt tom

  async function getQuestion(selectedTopic) {
    // Hämta fråga baserat på valt ämne
    const prompt = startPrompt + selectedTopic + endPrompt; // Prompt till Gemini
    const result = await model.generateContent(prompt); // Invänta svar från Gemini
    const questionData = result.response.text().split("\n"); // Dela upp frågan och svarsalternativ

    console.log(result); // För att kunna veta vilken index alternativen ska hamna på

    const questionText = questionData[0];
    const option1 = questionData[2];
    const option2 = questionData[3];
    const option3 = questionData[4];

    setTopic(selectedTopic); // Uppdatera topic med vald ämne
    setQuestion({
      text: questionText,
      options: [option1, option2, option3], // Uppdatera med fråga och alternativ. Rätt svar alltid option1.
      correctAnswer: option1,
    });
    setFeedback(""); // Nollställ feedback
  }

  function handleAnswer(selectedAnswer) {
    // Hantera svar
    if (selectedAnswer === question.correctAnswer) {
      setFeedback("Correct answer! :)");
    } else {
      // Jämför vald svar med korrekt svar. Om korrekt, visa Correct, om fel, visa Wrong
      setFeedback("Wrong answer! :(");
    }
  }

  return (
    <div>
      <div
        className="min-h-screen grid bg-cover bg-center bg-fixed"
        style={{
          backgroundImage:
            "url(https://img.freepik.com/free-photo/simple-smooth-fabric-textured-background_53876-108254.jpg?ga=GA1.1.1667245943.1733688417)",
        }}
      >
        <div className="md:flex md:flex-col sm:flex sm:flex-col">
          {/* Välj ämne för att starta quiz */}

          {!question && (
            <div className="text-center p-8">
              <h2 className="text-xl md:text-3xl font-semibold">
                Select a topic
              </h2>
              <div className="md:grid md:grid-cols-3 md:justify-center md:items-center md:gap-5 md:m-6 sm:gap-1 sm:flex sm:flex-col flex flex-wrap gap-8 m-4 pt-2 justify-center justify-items-center mx-auto">
                {[
                  "Science",
                  "History",
                  "6th Grade Mathematics",
                  "Geography",
                  "Movies & Cinema",
                  "TV Shows",
                  "Only for the 90's kids",
                  "Game of Thrones",
                  "Harry Potter",
                  "Superheroes and Villains",
                  "Food around the world",
                  "Famous Art and Artists",
                  "Famous Authors and Their Works",
                  "Music Legends and Albums",
                  "How I Met Your Mother",
                  "Modern Family",
                  "Friends (TV Show)",
                  "Gaming",
                ].map((topic) => (
                  <button
                    key={topic}
                    onClick={() =>
                      getQuestion(topic)
                    } /* Efter att ha tryckt på ämne, så hämtas frågan */
                    className="btn btn-primary w-full"
                  >
                    {topic}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Visa fråga och alternativ */}

          {question && (
            <div className="text-center p-8">
              <h2 className="text-xl md:text-3xl font-semibold">
                {question.text}
              </h2>
              <div className="flex flex-col justify-center items-center gap-3 mt-6">
                {question.options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() =>
                      handleAnswer(option)
                    } /* Kontrollera svar på vald alternativ */
                    className="btn btn-secondary max-w-xs"
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Ge feedback */}

          {feedback && (
            <div className="text-center p-8">
              <h3 className="text-xl md:text-3xl font-semibold">{feedback}</h3>
              <button
                onClick={() => {
                  setQuestion(null); /* Återställ fråga */
                  setFeedback("");
                }}
                className="btn btn-accent mt-4"
              >
                Try another topic
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

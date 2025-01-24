import { model } from "@/util/ai";
import { useEffect, useState } from "react";
import Card from "@/styles/Card";

export default function Movies() {
  const [prompt, setPrompt] = useState("");
  const [answer, setAnswer] = useState("");

  async function sendOnPageLoad(question) {
    const result = await model.generateContent(question);
    setAnswer(result.response.text());
  }

  useEffect(() => {
    useEffect(() => {
      sendOnPageLoad("Top 3 books in Akademibokhandeln?");
    }, []);
  }, []);

  return (
    <div>
      <h2>Top 3 books for each catogery</h2>
      <button>
        <Card>
          <p>{answer}</p>
        </Card>
      </button>
    </div>
  );
}
return (
  <div>
    <h2>Top 3 Books for Each Category</h2>

    {/* Dropdown för att välja kategori */}
    <select
      value={category}
      onChange={(e) => setCategory(e.target.value)}
      className="border p-2"
    >
      <option value="">Select a category</option>
      <option value="Novels">Novels</option>
      <option value="Thriller">Thriller</option>
      <option value="YA">YA books</option>
    </select>

    <Card>
      <p>
        {category
          ? `Selected category: ${category}`
          : "Select a category for book suggestions."}
      </p>
    </Card>
  </div>
);

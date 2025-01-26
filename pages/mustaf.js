import { model } from "@/util/ai";
import { useEffect, useState } from "react";
import Card from "@/pages/BooksCard.js";

export default function Books() {
  const [category, setCategory] = useState("");
  const [answer, setAnswer] = useState("");

  async function sendOnPageLoad(question) {
    const result = await model.generateContent(question);
    setAnswer(result.response.text());
  }

  useEffect(() => {
    if (category) {
      sendOnPageLoad(`Top 3 books in ${category}`);
    }
  }, [category]);

  return (
    <div>
      <h2>Top 3 Books for Each Category </h2>

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="border p-1"
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
        <p>{answer}</p>
      </Card>
    </div>
  );
}

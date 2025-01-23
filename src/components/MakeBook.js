import React, { useState } from "react";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:5000";

function MakeBook({ onBookAdded }) {
  const [name, setName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name) return;

    try {
      // post to baseurl/books
      await axios.post("/books", { name });
      setName(""); // Clear the input field after submission
      if (onBookAdded) {
        onBookAdded(); // refresh the book list
      }
    } catch (error) {
      console.error("Error creating book:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Book Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter book name"
        />
      </label>
      <button type="submit">Add Book</button>
    </form>
  );
}

export default MakeBook;

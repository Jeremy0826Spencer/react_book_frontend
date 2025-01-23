// src/components/Books.js
import React from "react";

function Books({ books }) {
  return (
    <div>
      <h2>Books List</h2>
      <ul>
        {(books || []).map((book) => (
          <li key={book.id}>{book.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Books;

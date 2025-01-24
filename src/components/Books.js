// src/components/Books.js
import React from "react";

function Books({ books }) {
  return (
    <div>
      <h2>Books List</h2>
      <ul>
        {(books || []).map((book) => (
          <li key={book.id}>
            <strong>ISBN:</strong> {book.isbn}<br />
            <strong>Title:</strong> {book.title}<br />
            <strong>Author:</strong> {book.author}<br />
            <strong>Genre:</strong> {book.genre}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Books;

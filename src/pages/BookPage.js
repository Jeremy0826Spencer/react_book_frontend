import React, { useState, useEffect } from "react";
import axios from "axios";
import MakeBook from "../components/MakeBook";
import Books from "../components/Books";

axios.defaults.baseURL = "http://localhost:5000";

function BookPage() {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    try {
      const response = await axios.get("/books");
      setBooks(response.data);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div>
      <h1>Book Management</h1>
      <MakeBook onBookAdded={fetchBooks} />
      <Books books={books} />
    </div>
  );
}

export default BookPage;

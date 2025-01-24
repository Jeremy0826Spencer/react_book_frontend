import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BooksPage from "./pages/BookPage.js";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BooksPage />} />
      </Routes>
    </Router>
  );
}

export default App;

import React, { useContext } from "react";
import { BookContext } from "../contexts/BookContext";

const Navbar = () => {
  const { books } = useContext(BookContext);

  return (
    <div className="navbar">
      <h1>Your Reading List:</h1>
      <p>Right now you have {books.length} books to read</p>
      <span>Click on a book to delete it</span>
    </div>
  );
};

export default Navbar;

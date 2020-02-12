import React, { useContext } from "react";
import { BookContext } from "../contexts/BookContext";

// destructuring via props
const BookDetails = ({ book }) => {
  // import func from context obj
  const { dispatch } = useContext(BookContext);
  return (
    // anon arrow f to take Args
    <li
      onClick={() =>
        dispatch({
          type: "REMOVE_BOOK",
          book: {
            id: book.id
          }
        })
      }
    >
      <div className="title">Title: {book.title}</div>
      <div className="author">Author: {book.author}</div>
    </li>
  );
};

export default BookDetails;

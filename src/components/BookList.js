import React, { useContext } from "react";
import { BookContext } from "../contexts/BookContext";
import BookDetails from "./BookDetails";

const BookList = () => {
  // desrtucturing from context object properties into vars
  const { books } = useContext(BookContext);
  // conditinal render return
  return books.length ? (
    <div className="book-list">
      <ul>
        {books.map(book => {
          return <BookDetails book={book} key={book.id} />;
        })}
      </ul>
    </div>
  ) : (
    <div className="emtpy">
      No books to Read. Do something else. There are not many books worth
      reading anyway.
    </div>
  );
};

export default BookList;

import React, { useContext, useState } from "react";
import { BookContext } from "../contexts/BookContext";

const NewBookForm = () => {
  // extracting a func from context obj
  const { dispatch } = useContext(BookContext);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  // prevent e default and use context func to send data to context state
  const handleSubmit = e => {
    e.preventDefault();
    // sending action object
    dispatch({
      type: "ADD_BOOK",
      book: {
        title: title,
        author // destructuring for the same name
      }
    });
    // reset form
    setTitle("");
    setAuthor("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Book Title"
        value={title}
        required
        // 2wayz-binding using event obj catch on change
        onChange={e => setTitle(e.target.value)}
      />

      <input
        type="text"
        placeholder="Book Author"
        value={author}
        required
        // 2wayz-binding using event obj catch on change
        onChange={e => setAuthor(e.target.value)}
      />
      <input type="submit" value="ADD BOOK"></input>
    </form>
  );
};

export default NewBookForm;

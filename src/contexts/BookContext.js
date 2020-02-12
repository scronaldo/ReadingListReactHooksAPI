import React, { createContext, useReducer, useEffect } from "react";
import { bookReducer } from "../reducers/BookReducer";

export const BookContext = createContext();

const BookContextProvider = props => {
  const initState = [
    { title: "How to quit being stupid", author: "Patrick Smartasst", id: 1 },
    { title: "The book that was never written", author: "Pavel Os", id: 2 },
    {
      title: "How to stop reading random books",
      author: "Your timemanager",
      id: 3
    },
    {
      title: "Black Swan or f@ck randomness",
      author: "Nassim Taleb",
      id: 4
    },

    {
      title: "Unreadable  Book",
      author: "Mystery",
      id: 5
    }
  ];

  const [books, dispatch] = useReducer(bookReducer, initState, () => {
    // 3rd useReducer arguments - init lazy state func

    const localData = localStorage.getItem("books");
    // conditinal return
    return localData ? JSON.parse(localData) : initState;
  });
  // books === initstate
  // useReducer returns array with state and disptach method

  //localStorage hook up
  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);

  return (
    <BookContext.Provider value={{ books, dispatch }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;

import uuid from "uuid/v1";

export const bookReducer = (state, action) => {
  switch (action.type) {
    case "ADD_BOOK":
      return [
        ...state,
        {
          title: action.book.title,
          author: action.book.author,
          id: uuid()
        }
      ];

    case "REMOVE_BOOK":
      console.log(action);

      return state.filter(book => book.id !== action.book.id);

    default:
      return state;
  }
};

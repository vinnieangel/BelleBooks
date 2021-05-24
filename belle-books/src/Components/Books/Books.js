import React from "react";
import BookItem from "./BookItem";
import BookForm from "../NewBook/BookForm";

const Books = (props) => {
  return (
    <ul className="expenses-list">
      {props.books.map((book) => (
        <BookItem
          key={book.id}
          title={book.title}
          description={book.description}
          rating={book.rating}
          date={book.dateFinished}
        />
      ))}
      <BookForm></BookForm>
    </ul>
  );
};

export default Books;

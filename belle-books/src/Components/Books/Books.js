import React from "react";
import BookItem from "./BookItem";
import BookForm from "../NewBook/BookForm";
import Card from "../Card/Card";
import "./Books.css";
import BookFilter from "./BookFilter";

const Books = (props) => {
  const saveBookDataHandler = (enteredBookData) => {
    const BookData = {
      ...enteredBookData,
      id: Math.random().toString(),
    };
    props.onAddBook(BookData);
  };
  return (
    <div>
      <BookFilter></BookFilter>
      <Card>
        <ul className="books-list">
          {props.books.map((book) => (
            <BookItem
              key={book.id}
              title={book.title}
              description={book.description}
              rating={book.rating}
              date={book.dateFinished}
            />
          ))}
        </ul>
      </Card>

      <BookForm onSaveBookData={saveBookDataHandler}></BookForm>
    </div>
  );
};

export default Books;

import React from "react";
import BookItem from "./BookItem";
import BookForm from "../NewBook/BookForm";
import Card from "../Card/Card";
import "./BookItem.css";

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
      <Card>
        <ul className=".ul.no-bullets">
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
      <Card>
        <BookForm onSaveBookData={saveBookDataHandler}></BookForm>
      </Card>
    </div>
  );
};

export default Books;

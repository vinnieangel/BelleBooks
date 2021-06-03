import React, { useState } from "react";
import BookItem from "./BookItem";
import BookForm from "../NewBook/BookForm";
import Card from "../Card/Card";
import "./Books.css";
import BookFilter from "./BookFilter";
import { useSelector } from "react-redux";

const Books = (props) => {
  const posts = useSelector((state) => state.posts);

  //console.log(posts);
  //console.log(props.books);

  const [filteredYear, setFilteredYear] = useState("0000");
  const yearChangeHandler = (enteredYearData) => {
    if (enteredYearData === "0000") {
    }
    setFilteredYear(enteredYearData);
  };

  var filteredBooks = posts;

  if (filteredYear === "0000") {
    filteredBooks = posts;
  } else {
    filteredBooks = posts.filter(
      (book) => book.dateFinished.toString().substring(0, 4) === filteredYear
    );
  }

  const saveBookDataHandler = (enteredBookData) => {
    const BookData = {
      ...enteredBookData,
      id: Math.random().toString(),
    };
    props.onAddBook(BookData);
  };
  return (
    <div>
      <BookFilter
        initialYear={filteredYear}
        onYearChange={yearChangeHandler}
      ></BookFilter>
      <div className="book-item__title">
        Total Number of Books: {filteredBooks.length}
      </div>
      <Card>
        <ul className="books-list">
          {filteredBooks.map((book) => (
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

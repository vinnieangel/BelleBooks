import "./App.css";
import Books from "./Components/Books/Books";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPosts } from "./actions/posts";

const DUMMY_BOOKS = [
  {
    id: "b1",
    title: "Into the water",
    description: "This is an exciting book",
    rating: 9.5,
    dateFinished: new Date(2020, 7, 14),
  },
  {
    id: "b2",
    title: "Into the water",
    description: "This is an exciting book",
    rating: 9.5,
    dateFinished: new Date(2020, 7, 14),
  },
  {
    id: "b3",
    title: "Into the water",
    description: "This is an exciting book",
    rating: 9.5,
    dateFinished: new Date(2022, 7, 14),
  },
  {
    id: "b4",
    title: "Into the water",
    description: "This is an exciting book",
    rating: 9.5,
    dateFinished: new Date(2021, 7, 14),
  },
];

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  const [books, addBooks] = useState(DUMMY_BOOKS);

  const addBookHandler = (book) => {
    addBooks((prevBooks) => {
      return [book, ...prevBooks];
    });
  };

  return (
    <div>
      <h1 className="book-header">My Books</h1>
      <Books books={books} onAddBook={addBookHandler}></Books>
    </div>
  );
}

export default App;

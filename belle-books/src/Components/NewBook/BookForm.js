import React, { useState } from "react";
import "./BookForm.css";

const BookForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [enteredDescription, setEnteredDescription] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const descriptionChangeHandler = (event) => {
    setEnteredDescription(event.target.value);
  };

  const ratingChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const BookData = {
      title: enteredTitle,
      description: enteredDescription,
      rating: +enteredAmount,
      dateFinished: new Date(enteredDate),
    };

    props.onSaveBookData(BookData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
    setEnteredDescription("");
  };
  return (
    <div className=".new-book">
      <form onSubmit={submitHandler}>
        <div className="new-book__controls">
          <div className="new-book__control">
            <label className="book-item__title">Book Title</label>
            <input
              type="text"
              value={enteredTitle}
              onChange={titleChangeHandler}
            />
          </div>
          <div className="new-book__control">
            <label className="book-item__title">Description</label>
            <input
              type="text"
              value={enteredDescription}
              onChange={descriptionChangeHandler}
            />
          </div>
          <div className="new-book__control">
            <label className="book-item__title">Rating (out of 10)</label>
            <input
              type="number"
              min="0"
              step=".05"
              max="10"
              value={enteredAmount}
              onChange={ratingChangeHandler}
            />
          </div>
          <div className="new-book__control">
            <label className="book-item__title">Date Finshed Reading</label>
            <input
              type="date"
              min="2020-01-01"
              max="2023-12-31"
              value={enteredDate}
              onChange={dateChangeHandler}
            />
          </div>
        </div>
        <div className="new-book__actions">
          <button type="submit">Add Book</button>
          <button>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default BookForm;

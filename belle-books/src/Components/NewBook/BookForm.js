import React, { useState } from "react";
import "./BookForm.css";
import { useDispatch } from "react-redux";
import { createPost } from "../../actions/posts";

const BookForm = (props) => {
  const dispatch = useDispatch();

  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [enteredDescription, setEnteredDescription] = useState("");
  const [isTitleValid, setTitleIsValid] = useState(true);
  const [isDescriptionValid, setDescriptionIsValid] = useState(true);
  const [isDateValid, setDateIsValid] = useState(true);
  const [isAmountValid, setAmountIsValid] = useState(true);
  const [show, setShow] = useState(false);
  var isValid = true;

  const changeView = (event) => {
    event.preventDefault();
    setShow(show === true ? false : true);
  };

  const titleChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setTitleIsValid(true);
    }
    setEnteredTitle(event.target.value);
  };

  const descriptionChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setDescriptionIsValid(true);
    }
    setEnteredDescription(event.target.value);
  };

  const ratingChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setAmountIsValid(true);
    }
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setDateIsValid(true);
    }
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (enteredTitle.trim().length === 0) {
      setTitleIsValid(false);
      isValid = false;
      //return;
    }

    if (enteredDescription.trim().length === 0) {
      setDescriptionIsValid(false);
      isValid = false;
      //return;
    }

    if (enteredAmount.trim().length === 0) {
      setAmountIsValid(false);
      isValid = false;
      //return;
    }

    if (enteredDate.trim().length === 0) {
      setDateIsValid(false);
      isValid = false;
      //return;
    }

    if (isValid === false) {
      return;
    }

    const BookData = {
      title: enteredTitle,
      description: enteredDescription,
      rating: +enteredAmount,
      dateFinished: new Date(enteredDate),
    };

    dispatch(createPost(BookData)); //look here

    props.onSaveBookData(BookData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
    setEnteredDescription("");
  };

  if (show === false) {
    return (
      <div className="new-book">
        <button
          style={{ textAlign: "center", height: "40px", width: "150px" }}
          onClick={changeView}
        >
          Add Book
        </button>
      </div>
    );
  }
  if (show === true) {
    return (
      <div className="new-book">
        <form onSubmit={submitHandler}>
          <div className="new-book__controls">
            <div className="new-book__control">
              <label
                style={{ color: !isTitleValid ? "red" : "white" }}
                className="book-item__title"
              >
                Book Title
              </label>
              <input
                style={{
                  borderColor: !isTitleValid ? "red" : "white",
                  background: !isTitleValid ? "salmon" : "white",
                }}
                type="text"
                value={enteredTitle}
                onChange={titleChangeHandler}
              />
            </div>
            <div className="new-book__control">
              <label
                style={{ color: !isDescriptionValid ? "red" : "white" }}
                className="book-item__title"
              >
                Description
              </label>
              <input
                style={{
                  borderColor: !isDescriptionValid ? "red" : "white",
                  background: !isDescriptionValid ? "salmon" : "white",
                }}
                type="text"
                value={enteredDescription}
                onChange={descriptionChangeHandler}
              />
            </div>
            <div className="new-book__control">
              <label
                style={{ color: !isAmountValid ? "red" : "white" }}
                className="book-item__title"
              >
                Rating (out of 10)
              </label>
              <input
                style={{
                  borderColor: !isAmountValid ? "red" : "white",
                  background: !isAmountValid ? "salmon" : "white",
                }}
                type="number"
                min="0"
                step=".05"
                max="10"
                value={enteredAmount}
                onChange={ratingChangeHandler}
              />
            </div>
            <div className="new-book__control">
              <label
                style={{ color: !isDateValid ? "red" : "white" }}
                className="book-item__title"
              >
                Date Finshed Reading
              </label>
              <input
                style={{
                  borderColor: !isDateValid ? "red" : "white",
                  background: !isDateValid ? "salmon" : "white",
                }}
                type="date"
                min="2020-01-01"
                max="2023-12-31"
                value={enteredDate}
                onChange={dateChangeHandler}
              />
            </div>
          </div>
          <div className="new-book__actions">
            <button style={{ height: "40px", width: "150px" }} type="submit">
              Add Book
            </button>
            <button
              onClick={changeView}
              style={{ height: "40px", width: "150px" }}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    );
  }
};

export default BookForm;

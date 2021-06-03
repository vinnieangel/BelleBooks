import React from "react";
import "./BookItem.css";

const BookItem = (props) => {
  //const month = props.date.toLocaleString("en-US", { month: "long" });
  //const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  //const year = props.date.getFullYear();
  //console.log(props.date);

  var test = props.date;
  test.toString();
  var year = test.substring(0, 4);
  var month = test.substring(5, 7);
  var day = test.substring(8, 10);

  var monthTest = parseInt(month);
  monthTest--;

  var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  var selectedMonthName = months[monthTest];
  month = selectedMonthName;

  return (
    <li>
      <div className="book-item__description">
        <div className="book-item__title">{year}</div>
        <div className="book-item__title">{month}</div>
        <div className="book-item__title">{day}</div>
        <h2 className="book-item__title">{props.title}</h2>
        <div className="book-item__rating">{props.rating}/10</div>
        <div className="book-item__title">{props.description}</div>
      </div>
    </li>
  );
};

export default BookItem;

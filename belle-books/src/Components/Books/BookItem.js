import React from "react";
import "./BookItem.css";

const BookItem = (props) => {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();
  return (
    <li>
      <div className="book-item__description">
        <div>{month}</div>
        <div>{day}</div>
        <div>{year}</div>
        <h2>{props.title}</h2>
        <div className="book-item__rating">{props.rating}/10</div>
        <div>{props.description}</div>
      </div>
    </li>
  );
};

export default BookItem;

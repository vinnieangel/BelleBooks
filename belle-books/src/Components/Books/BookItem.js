import React from "react";

const BookItem = (props) => {
  return (
    <li>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{props.rating}/10</div>
      </div>
    </li>
  );
};

export default BookItem;

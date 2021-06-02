import React from "react";
import "./BookFilter.css";

const BookFilter = (props) => {
  const yearChangeHandler = (event) => {
    props.onYearChange(event.target.value);
  };
  return (
    <div className="book-filter">
      <div className="book-filter__control">
        <label>Filter by year</label>
        <select value={props.initialYear} onChange={yearChangeHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="0000">All</option>
        </select>
      </div>
    </div>
  );
};

export default BookFilter;

import React from "react";

const BookForm = () => {
  return (
    <form>
      <div>
        <div>
          <label className="book-item__title">Book Title</label>
          <input type="text" />
        </div>
        <div>
          <label className="book-item__title">Description</label>
          <input type="text" />
        </div>
        <div>
          <label className="book-item__title">Rating (out of 10)</label>
          <input type="number" min="0" step=".05" max="10" />
        </div>
        <div>
          <label className="book-item__title">Date Finshed Reading</label>
          <input type="date" min="2020-01-01" max="2023-12-31" />
        </div>
      </div>
      <div>
        <button type="submit">Add Book</button>
        <button>Cancel</button>
      </div>
    </form>
  );
};

export default BookForm;

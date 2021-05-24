import "./App.css";
import Books from "./Components/Books/Books";

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
    dateFinished: new Date(2020, 7, 14),
  },
  {
    id: "b4",
    title: "Into the water",
    description: "This is an exciting book",
    rating: 9.5,
    dateFinished: new Date(2020, 7, 14),
  },
];

function App() {
  return (
    <div>
      <h1 className="book-item__title">My Books</h1>
      <Books books={DUMMY_BOOKS}></Books>
    </div>
  );
}

export default App;

import { useEffect, useContext } from "react";

import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import BooksContext from "./context/booksContext";

function App() {
  const { books, fetchBooks } = useContext(BooksContext);
  console.log(books);

  useEffect(() => {
    fetchBooks();

    // const listener = () => {
    //   console.log(counter);
    // };

    // document.body.addEventListener("click", listener);

    // note - react will call this clean up method first on every next re-render
    // This is to UNDO something before this useEffect runs on next render to avoid bugs
    // const cleanUp = () => {
    //   document.body.removeEventListener("click", listener);
    // };

    // return cleanUp;
  }, [fetchBooks]);

  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookCreate />
      <BookList />
    </div>
  );
}

export default App;

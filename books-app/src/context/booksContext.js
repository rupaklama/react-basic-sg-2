import axios from "axios";
import { createContext, useCallback, useState } from "react";

const BooksContext = createContext();

function Provider({ children }) {
  const [books, setBooks] = useState([]);

  const fetchBooks = useCallback(async () => {
    try {
      const response = await axios.get("http://localhost:3001/books");
      setBooks(response.data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const onCreateBook = async title => {
    try {
      const response = await axios.post("http://localhost:3001/books", {
        title: title,
      });

      const updatedBooks = [...books, response.data];

      setBooks(updatedBooks);
    } catch (error) {
      console.log(error);
    }
  };

  const onEditBookById = async (id, title) => {
    try {
      const response = await axios.put(`http://localhost:3001/books/${id}`, {
        title: title,
      });

      const updatedBooks = books.map(book => {
        if (book.id === id) {
          return { ...book, ...response.data };
        }

        return book;
      });

      setBooks(updatedBooks);
    } catch (error) {
      console.log(error);
    }
  };

  const onDeleteBookById = async id => {
    try {
      await axios.delete(`http://localhost:3001/books/${id}`);

      const newBooksList = books.filter(book => book.id !== id);
      setBooks(newBooksList);
    } catch (error) {
      console.log(error);
    }
  };

  const valueToShare = {
    books,
    fetchBooks,
    onCreateBook,
    onEditBookById,
    onDeleteBookById,
  };

  return <BooksContext.Provider value={valueToShare}>{children}</BooksContext.Provider>;
}

export { Provider };
export default BooksContext;

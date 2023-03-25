import { useState } from "react";
import useBooksContext from "../hooks/useBooksContext";

function BookEdit({ book, onFormSubmit }) {
  const { onEditBookById } = useBooksContext();

  const [title, setTitle] = useState(book.title);

  const onSubmit = e => {
    e.preventDefault();

    // onEditBookById(book.id, title);
    // onFormSubmit(book.id, title);
    onFormSubmit();

    onEditBookById(book.id, title);
  };

  return (
    <form className="book-edit" onSubmit={onSubmit}>
      <label htmlFor="title">Title</label>

      <input type="text" id="title" className="input" value={title} onChange={e => setTitle(e.target.value)} />

      <button className="button is-primary">Save</button>
    </form>
  );
}

export default BookEdit;

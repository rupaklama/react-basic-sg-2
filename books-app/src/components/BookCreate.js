import { useState } from "react";
import useBooksContext from "../hooks/useBooksContext";

function BookCreate() {
  const { onCreateBook } = useBooksContext();

  const [title, setTitle] = useState("");

  const onChange = e => {
    setTitle(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();

    onCreateBook(title);

    setTitle("");
  };

  return (
    <div className="book-create">
      <h3>Add a Book</h3>

      <form onSubmit={onSubmit}>
        <label htmlFor="input">Title</label>
        <input type="text" id="input" onChange={onChange} value={title} className="input" />
        <button className="button">Create!</button>
      </form>
    </div>
  );
}

export default BookCreate;

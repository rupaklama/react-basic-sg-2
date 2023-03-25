import { useState } from "react";
import BookEdit from "./BookEdit";

import useBooksContext from "../hooks/useBooksContext";

function BookShow({ book }) {
  const { onDeleteBookById } = useBooksContext();

  const [showEdit, setShowEdit] = useState(false);

  // note - one single callback for two handlers for dry modular code
  const onFormSubmit = () => {
    setShowEdit(false);

    // onEditBookById(id, newTitle);
  };

  if (book !== null)
    return (
      <div className="book-show">
        <img src={`https://picsum.photos/seed/${book.id}/300/200`} alt="books" />

        {showEdit ? (
          <BookEdit
            book={book}
            // onEditBookById={onEditBookById}
            onFormSubmit={onFormSubmit}
          />
        ) : (
          <h3>{book?.title}</h3>
        )}

        <div className="actions">
          <button onClick={() => setShowEdit(!showEdit)} className="edit">
            Edit
          </button>

          <button onClick={() => onDeleteBookById(book.id)} className="delete">
            Delete
          </button>
        </div>
      </div>
    );
}

export default BookShow;

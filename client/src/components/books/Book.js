import { useState } from 'react';
import BookForm from './BookForm';


const Book = ( {id, title, author_name, genre, updateBook, deleteBook}) => {
  const [editing, setEdit] = useState(false)

  // <> if ? else :</>
  return (
    <>
    <h1>{title}</h1>
    <h1>{author_name}</h1>
    <h2>{genre}</h2>
    {
      editing ? 
      <>
      <BookForm id={id}
      title={title}
      author_name={author_name}
      genre={genre}
      />
      <button onClick={() => setEdit(false)}>Cancel</button>
      </>
      :
      <>
      <button onClick={() => setEdit(true)}>Edit</button>
      <button onClick={() => deleteBook(id)}>Delete</button>
      </>

    }

    </>
  )


}

export default Book;
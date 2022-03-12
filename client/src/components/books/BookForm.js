
import { useState } from 'react';

const BookForm = ({ addBook }) => {
  const [book, setBook] = useState({ title: '', author_name: '', genre: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    addBook(book)
    // clearing out the form 
    setBook({ title: '' ,  author_name: '', genre: ''})
  }

  return(
    <>
      <form onSubmit={handleSubmit}>
        <input 
          name='title' 
          value={book.title} 
          onChange={ (e) => setBook({ ...book, title: e.target.value })} 

          placeholder='Title'
          required
        />
        <input 
          name='author_name' 
          value={book.author_name} 
          onChange={ (e) => setBook({ ...book, author_name: e.target.value })} 

          placeholder='Author Name'
          required
        />
        <input 
          name='genre' 
          value={book.genre} 
          onChange={ (e) => setBook({ ...book, genre: e.target.value })} 

          placeholder='Genre'
          required
        />
        <button type="submit">Submit</button>
        {/* <button deleteBook >Delete</button> */}

      </form>
    </>
  )
}

export default BookForm;
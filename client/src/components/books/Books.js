import { useState, useEffect } from 'react';
import axios from 'axios';
import BookForm from './BookForm'


const Books = () => {
  const [books, setBooks] = useState([])

  useEffect( () => {
    axios.get('/api/books')
      .then( res => {
        setBooks(res.data)
      })
      .catch( err => console.log(err) )
  }, [])

  const addBook = (book) => {
    axios.post('/api/books', { book })
      .then( res => {
        setBooks([...books, res.data ])
      })
      .catch( err => console.log(err) )
  }

  const updateBook = (id, book) => {
    axios.put(`/api/books/${id}`, { book })
      .then( res => {
        const newUpdatedBooks = books.map( b => {
          if (b.id === id) {
            return res.data
          }
          return b
        })
        setBooks(newUpdatedBooks)
      })
      .catch( err => console.log(err) )
  }

  const deleteBook = (id) => {
    axios.delete(`/api/books/${id}`)
      .then(res => {
        setBooks(books.filter( b => b.id !== id ))
        alert(res.data.message)
      })
      .catch( err => console.log(err) )
  }

  return(
    <>
      <h1>Books</h1>
      <BookForm addBook={addBook} />
    </>
  )
}

export default Books;
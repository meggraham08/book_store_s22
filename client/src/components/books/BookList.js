import Book from './Book';

const BookList = ( {books, updateBook, deleteBook }) => (
  <>
    { books.map( b => 
      <Book key={b.id}
      {...b}
      updateBook={updateBook}
      deleteBook={deleteBook}
      />
    )}
    </>
)

export default BookList;
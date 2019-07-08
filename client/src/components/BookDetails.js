import React from 'react'
import { graphql } from 'react-apollo'

import { GET_BOOK } from '../queries/queries'

const Details = ({ book }) => {
  if (!book) return null
  return (
    <div>
      <h2>{book.name}</h2>
      <p>{book.genre}</p>
      <p>{book.author.name}</p>
      <p>All books by this author:</p>
      <ul className="other-books">
        {book.author.books.map(e => (
          <li key={e.id}>{e.name}</li>
        ))}
      </ul>
    </div>
  )
}

function BookDetails({ bookId, data }) {
  const { book } = data

  return (
    <div id="book-details">
      <p>Ouput book details here</p>
      <Details book={book} />
    </div>
  )
}

export default graphql(GET_BOOK, {
  options: ({ bookId }) => {
    return {
      variables: {
        id: bookId
      }
    }
  }
})(BookDetails)

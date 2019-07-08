import React from 'react'
import { graphql } from 'react-apollo'

import { GET_BOOKS } from '../queries/queries'
import BookDetails from './BookDetails'

function BookList({ data }) {
  const { loading, books } = data
  if (loading) return 'Loading books..'

  const booksList = books.map(e => <li key={e.id}>{e.name}</li>)
  return (
    <div>
      <ul id="book-list">{booksList}</ul>
      <BookDetails />
    </div>
  )
}

export default graphql(GET_BOOKS)(BookList)

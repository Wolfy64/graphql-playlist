import React, { useState } from 'react'
import { graphql } from 'react-apollo'

import { GET_BOOKS } from '../queries/queries'
import BookDetails from './BookDetails'

function BookList({ data }) {
  const [selected, setSelected] = useState(null)
  const { loading, books } = data
  if (loading) return 'Loading books..'

  const booksList = books.map(e => (
    <li key={e.id} onClick={() => setSelected(e.id)}>
      {e.name}
    </li>
  ))
  return (
    <div>
      <ul id="book-list">{booksList}</ul>
      <BookDetails bookId={selected} />
    </div>
  )
}

export default graphql(GET_BOOKS)(BookList)

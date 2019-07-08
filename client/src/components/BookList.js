import React from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

const GET_BOOKS = gql`
  {
    books {
      name
      id
    }
  }
`

function BookList({ data }) {
  const { loading, books } = data
  if (loading) return 'Loading books..'

  const booksList = books.map(e => <li key={e.id}>{e.name}</li>)
  return (
    <div>
      <ul id="book-list">{booksList}</ul>
    </div>
  )
}

export default graphql(GET_BOOKS)(BookList)

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

function BookList(props) {
  console.log(props)
  return (
    <div>
      <ul id="book-list">
        <li>Book name</li>
      </ul>
    </div>
  )
}

export default graphql(GET_BOOKS)(BookList)

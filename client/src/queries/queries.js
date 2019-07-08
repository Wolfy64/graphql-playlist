import gql from 'graphql-tag'

// QUERIES
const GET_BOOKS = gql`
  {
    books {
      name
      id
    }
  }
`
const GET_AUTHORS = gql`
  {
    authors {
      name
      id
    }
  }
`

// MUTATIONS
const ADD_BOOK = gql`
  mutation {
    addBook(name: "", genre: "", id: "") {
      name
      id
    }
  }
`

export { GET_BOOKS, GET_AUTHORS, ADD_BOOK }

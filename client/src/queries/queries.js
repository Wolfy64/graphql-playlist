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
  mutation($name: String!, $genre: String!, $authorId: ID!) {
    addBook(name: $name, genre: $genre, authorId: $authorId) {
      name
      id
    }
  }
`

export { GET_BOOKS, GET_AUTHORS, ADD_BOOK }

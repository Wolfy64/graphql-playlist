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
const GET_BOOK = gql`
  query($id: ID) {
    book(id: $id) {
      id
      name
      genre
      author {
        id
        name
        age
        books {
          name
          id
        }
      }
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

export { GET_BOOK, GET_BOOKS, GET_AUTHORS, ADD_BOOK }

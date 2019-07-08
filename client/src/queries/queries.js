import gql from 'graphql-tag'

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

export { GET_BOOKS, GET_AUTHORS }

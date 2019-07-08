import React from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

const GET_AUTHORS = gql`
  {
    authors {
      name
      id
    }
  }
`
function AddBook({ data }) {
  console.log(data)
  const { loading, authors } = data
  if (loading) return 'Loading authors...'

  const authorsList = authors.map(e => <option key={e.id}>{e.name}</option>)
  return (
    <form id="add-book">
      <div className="field">
        <label>Book name:</label>
        <input type="text" />
      </div>
      <div className="field">
        <label>Genre:</label>
        <input type="text" />
      </div>
      <div className="field">
        <label>Author:</label>
        <select>
          <option>Select author</option>
          {authorsList}
        </select>
      </div>
      <button>+</button>
    </form>
  )
}

export default graphql(GET_AUTHORS)(AddBook)

import React, { useState } from 'react'
import { graphql, compose } from 'react-apollo'

import { GET_AUTHORS, ADD_BOOK } from '../queries/queries'

function AddBook({ getAuthors, addBook }) {
  const [name, setName] = useState('')
  const [genre, setGenre] = useState('')
  const [authorId, setAuthorId] = useState('')
  const { loading, authors } = getAuthors

  if (loading) return 'Loading authors...'

  const authorsList = authors.map(e => (
    <option key={e.id} value={e.id}>
      {e.name}
    </option>
  ))

  const submit = e => {
    e.preventDefault()
    console.log('submit', { name, genre, authorId })
    addBook(name, genre, authorId)
  }

  return (
    <form id="add-book" onSubmit={submit}>
      <div className="field">
        <label>Book name:</label>
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </div>
      <div className="field">
        <label>Genre:</label>
        <input
          type="text"
          value={genre}
          onChange={e => setGenre(e.target.value)}
        />
      </div>
      <div className="field">
        <label>Author:</label>
        <select value={authorId} onChange={e => setAuthorId(e.target.value)}>
          <option>Select author</option>
          {authorsList}
        </select>
      </div>
      <button>Add Book</button>
    </form>
  )
}

export default compose(
  graphql(GET_AUTHORS, { name: 'getAuthors' }),
  graphql(ADD_BOOK, { name: 'addBook' })
)(AddBook)

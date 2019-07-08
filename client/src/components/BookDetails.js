import React, { useState } from 'react'
import { graphql } from 'react-apollo'

import { GET_BOOK } from '../queries/queries'

function BookDetails({ data }) {
  // const [name, setName] = useState('')
  // const { loading, authors } = data

  // if (loading) return 'Loading authors...'

  return (
    <div id="book-details">
      <p>Ouput book details here</p>
    </div>
  )
}

export default graphql(GET_BOOK)(BookDetails)

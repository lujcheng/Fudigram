import React, { useState } from 'react'

export default function UserInput(path) {
  const [term, setTerm] = useState('')
  const [results, setResults] = useState(0)

  const handleOnChange = e => {
    setTerm(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    setResults(results + 1)

  }

return (
  <>
    <p>Search Term: {term}</p>
    <form action={path} method='post'>
      User Name:
      <input type='text' name='userName' onChange={handleOnChange} />
      <input type='submit' value='Submit'/>
    </form>
    <p>Search results: {results} </p>

  </>
)
}

return (
  <>
    <p>Search Term: {term}</p>
    <form>
      <input type='text' name='term' value={term} onChange={handleOnChange} onSubmit={handleSubmit} />
      <button type='submit' onClick={handleSubmit}>submit</button>
    </form>
    <p>Search results: {results} </p>

  </>
)
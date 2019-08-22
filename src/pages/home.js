const React = require('react')
const ReactDOM = require('react-dom')
const App = require('./app')

function App() {
  return (
      <a href='/search'> Search </a>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
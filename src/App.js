import React from 'react';
import './App.css';
import Nav from './components/Nav'
import Search from './components/Search'
import Results from './components/Results'

//set api
function App() {
  const searchData = {
    key: process.env.REACT_APP_STOCK_API_KEY,
    api: 'https://www.dictionaryapi.com/api/v3/references/sd3/json/'
  }

  function getDefinition() {
    const url = `${searchData.api}compatible?key=${searchData.key}`;

    fetch(url)
    .then(response => response.json())
    .then(response => (console.log(response))
    )
  }

  function handleSubmit(event) {
    event.preventDefault();
    getDefinition();
  }

  return (
    <div>
      <Nav />
      <Results />
      <Search handleSubmit={handleSubmit}/>
    </div>
  );
}

export default App;

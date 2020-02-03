import React, { useState, useEffect } from 'react';
import './App.css';
import Nav from './components/nav/Nav';
import Search from './components/search/Search';
import Results from './components/results/Results';
// Hou comment: I removed some redundant whitespaces in this file

// Hou comment: Nice job using hooks to add state to your functional components throughout your app!
function App() {
  const searchData = {
    key: process.env.REACT_APP_STOCK_API_KEY,
    api: 'https://www.dictionaryapi.com/api/v3/references/sd3/json/'
  };

  // Hou comment: I don't think the comment below is needed, since it does not really describe the code that follows
  //create an array for search words in state. set to empty string.
  const [searchWord, setSearchWord] = useState('Hello');
  const [returnData, setReturnData] = useState('');

  useEffect(() => {
    getData(searchWord);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function getData(searchWord) {
    const url = `${searchData.api}${searchWord}?key=${searchData.key}`;

    fetch(url)
      .then(response => response.json())
      .then(response => {
        setReturnData(response[0]);
        setSearchWord('');
      })
      .catch(console.error);
  }

  function handleChange(event) {
    setSearchWord(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    getData(searchWord);
  }

  return (
    <div>
      <Nav />
      <Search
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        searchWord={searchWord}
      />
      <Results searchWord={searchWord} results={returnData} />
    </div>
  );
}

export default App;

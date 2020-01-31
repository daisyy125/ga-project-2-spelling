import React, { useState, useEffect } from 'react';
import './App.css';
import Nav from './components/nav/Nav';
import Search from './components/search/Search';
import Results from './components/results/Results';


//set api
function App() {
  const searchData = {
    key: process.env.REACT_APP_STOCK_API_KEY,
    api: 'https://www.dictionaryapi.com/api/v3/references/sd3/json/'
  };

  const searchSyn = {
    key: process.env.REACT_APP_THES_API_KEY,
    api: 'https://www.dictionaryapi.com/api/v3/references/ithesaurus/json/'
  };

  //create an array for search words in state. set to empty string.
  const [searchWord, setSearchWord] = useState('Hello');
  const [returnData, setReturnData] = useState('');
  const [returnSyn, setReturnSyn] = useState('');

  useEffect(() => {
    getData(searchWord);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function getData(searchWord) {
    const url = `${searchData.api}${searchWord}?key=${searchData.key}`;
    const urlSyn = `${searchSyn.api}${searchWord}?key=${searchSyn.key}`;

    fetch(url)
      .then(response => response.json())
      .then(response => {
        setReturnData(response[0]);
        setSearchWord('');
      })
      .catch(console.error);

    fetch(urlSyn)
      .then(response => response.json())
      .then(response => {
        setReturnSyn(response[0]);
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
      <Results searchWord={searchWord} results={returnData} syn={returnSyn} />
    </div>
  );
}

export default App;

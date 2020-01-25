import React, { useState } from 'react';
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

  const [searchWord, setSearchWord] = useState('');

  // useEffect(() => {
  //   getData(searchWord);
  // }, []);
  

  function getData(searchWord) {
    console.log(searchWord)
    const url = `${searchData.api}${searchWord}?key=${searchData.key}`;

    fetch(url)
    .then(response => response.json())
    .then(response => {
      let dataDefined = response[0];
      console.log(dataDefined)
    })
    .catch(console.error);
  }

  function handleChange(event) {
    setSearchWord(event.target.value);
    console.log(searchWord)
  }
  
  function handleSubmit(event) {
    event.preventDefault();
    getData(searchWord);
  }

  return (
    <div>
      <Nav />
      <Results />
      <Search handleSubmit={handleSubmit} handleChange={handleChange} searchWord={searchWord}/>
    </div>
  );
}

export default App;

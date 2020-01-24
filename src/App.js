import React from 'react';
import './App.css';
import Nav from './components/Nav'
import Search from './components/Search'
import Results from './components/Results'

function App() {
  return (
    <div>
      <Nav />
      <Results />
      <Search />
    </div>
  );
}

export default App;

import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header/Header'
import Search from './Search/Search'
import Filters from './Search/Filter'

function App() {
  const APIKey ='AIzaSyDJ1UgbUFZnOmi9c2lfxeYhVzBm59YJW7k'
  const baseUrl = 'https://www.googleapis.com/books/v1/volumes?'
  return (
    <div className="App">
      <Header />
      <Search />
      <Filters />
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import Header from './Header/Header'
import Search from './Search/Search'
import Filters from './Search/Filter'
import ListResult from './ListResult/ListResult'

class App extends React.Component {
  state = {
    bookSearch: '',
  }
   APIKey ='AIzaSyDJ1UgbUFZnOmi9c2lfxeYhVzBm59YJW7k'
   baseUrl = 'https://www.googleapis.com/books/v1/volumes?'
   handleSubmit(event, userInput){
    
    event.preventDefault();
    this.setState({
      bookSearch: userInput,
    })
    fetch(this.baseUrl, this.state.bookSearch)
    .then(response => {
        if(response.ok){
            return response.json();
        }
        throw new Error(response.statusText)
    })
    .then(responseJson => console.log(responseJson))
    .catch(err => {
        return err.message;
    })
}

  render(){
    return (
      <div className="App">
        <Header />
        <Search handleSubmit={this.handleSubmit}/>
        <Filters />
        <ListResult />
      </div>
    );
  }
}

export default App;

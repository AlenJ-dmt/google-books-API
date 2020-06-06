import React from "react";
import "./App.css";
import Header from "./Header/Header";
import Search from "./Search/Search";
import ListResult from "./ListResult/ListResult";

class App extends React.Component {
  constructor(props) {
    super(props);
    // this.handleSubmit = this.handleSubmit.bind(this)
    this.state = {
      userInput: "",
      bookResults: [],
      printType: "",
      bookType: "",
    };
  }
  inputChangeHandler = (ev) => {
    this.setState({
      [ev.target.name]: ev.target.value,
    });
  };
  handleSubmit = (event, userInput) => {
    event.preventDefault();
    this.setState({
      bookSearch: userInput,
    });

    let APIKey = "AIzaSyDJ1UgbUFZnOmi9c2lfxeYhVzBm59YJW7k";
    let baseUrl = "https://www.googleapis.com/books/v1/volumes?q=" + userInput;


    if(this.state.bookType !== '' && this.state.printType === '' ){
      baseUrl = baseUrl+'&filter=' + this.state.bookType
      console.log(baseUrl)
    }
    else if( this.state.bookType === '' && this.state.printType !== '' ){
      baseUrl = baseUrl+'&filter=' + this.state.printType
      console.log(baseUrl)
    }
    else if( this.state.bookType !== '' && this.state.printType !== '' ){
      baseUrl = baseUrl+'&filter=' + this.state.printType + '&filter=' + this.state.bookType
      console.log(baseUrl)
    }

    fetch(baseUrl)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error(response.statusText);
      })
      .then((responseJson) =>
        this.setState({
          bookResults: responseJson.items,
        })
      )
      .catch((err) => {
        return err.message;
      });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Search
          handleSubmit={this.handleSubmit}
          inputChangeHandler={this.inputChangeHandler}
        />
        <ListResult bookResults={this.state.bookResults} />
      </div>
    );
  }
}

export default App;

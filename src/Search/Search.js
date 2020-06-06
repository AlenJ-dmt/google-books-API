import React from "react";

class Search extends React.Component {
  state = { 
      userInput: ""
     };

  handleInput(event) {
    this.setState({ 
        userInput: event.target.value 
    });
  }
  render() {
    return (
      <div>
        <form>
          <label htmlFor="search" />
          <input
            type="text"
            placeholder="Search for books..."
            id="search"
            name="userInput"
            onChange={(event) => {
              this.handleInput(event);
            }}
          />
          <button
            type="submit"
            onClick={(event) => {
              this.props.handleSubmit(event, this.state.userInput);
            }}
          >
            Search
          </button>
          <label htmlFor="print-type"> Print Type: </label>
          <select name="printType" onChange={(ev) => this.props.inputChangeHandler(ev)} id="print-type">
            <option value="all">all</option>
            <option value="free-ebooks">free ebooks</option>
            <option value="paid-ebooks">not free ebook</option>
          </select>
          <label htmlFor="book-type"> Book Type: </label>
          <select name="bookType" onChange={(ev) => this.props.inputChangeHandler(ev)} id="book-type">
            <option value="no-filter">no filter</option>
            <option value="ebook"> ebook </option>
            <option value="pdf"> pdf </option>
          </select>
        </form>
      </div>
    )
  }
}

export default Search;

import React from 'react'

class Search extends React.Component{
    constructor(props){
        super(props)
        this.state={userInput:''}
    }

    handleInput(event){
        this.setState({userInput: event.target.value})
        
    }

    // handleSubmit(event){
    //     event.preventDefault();
    //     console.log(this.state.userInput);
    //     fetch(this.props.url)
    //     .then(response => {
    //         if(response.ok){
    //             return response.json();
    //         }
    //         throw new Error(response.statusText)
    //     })
    //     .then(responseJson => displayResults(responseJson))
    //     .catch(err => {
    //         return err.message;
    //     })
    // }
    render(){
        return(
            <div>
                <form>
                    <label for='search' />
                    <input type='text' placeholder='Search for books...' id='search' name="userInput" onChange={(event) => {this.handleInput(event)}} />
                    <button type='submit' onClick={(event) => {this.props.handleSubmit(event, this.state.userInput)}}>Search</button>
                </form>
            </div>
        )
    }
}

export default Search;
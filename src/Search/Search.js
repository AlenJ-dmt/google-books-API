import React from 'react'

class Search extends React.Component{
    render(){
        return(
            <div>
                <form>
                    <label for='search' />
                    <input type='text' placeholder='Search for books...' id='search' />
                    <button type='submit' >Search</button>
                </form>
            </div>
        )
    }
}

export default Search;
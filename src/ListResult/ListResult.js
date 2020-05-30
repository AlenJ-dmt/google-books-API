import React from 'react';
import Result from './Result';

class ListResult extends React.Component {

    bookList = this.props.bookResults.map(book => console.log(book))
         
    render() {
        console.log(this.props.bookResults.items)
        return(
            //list results here
            <div>
                <h2>results</h2>
                
            </div>
        )
    }

    static defaultProps = {
        bookResults : {
            items: []
        }
    }
}
export default ListResult;
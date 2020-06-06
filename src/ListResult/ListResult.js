import React from "react";
import Result from "./Result";

class ListResult extends React.Component {
  //   bookList = this.props.bookResults.map((book) => (
  //     <Result
  //       title={book.volumeInfo.title}
  //       author={book.volumeInfo.authors[0]}
  //       description={book.volumeInfo.description}
  //     />
  //   ));

  render() {
    return (
      //list results here
      <div>
        <h2>results</h2>
        {this.props.bookResults.map((book, index) => (
          <Result
            key={index}
            title={book.volumeInfo.title}
            author={book.volumeInfo.authors[0]}
            description={book.volumeInfo.description}
            imeSrc={book.volumeInfo.imageLinks.smallThumbnail}
          />
        ))}
      </div>
    );
  }

  static defaultProps = {
    bookResults: {
      items: [],
    },
  };
}
export default ListResult;

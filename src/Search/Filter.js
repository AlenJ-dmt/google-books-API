import React from "react";

class Filters extends React.Component {
  render() {
    return (
      <div>
        <form>
          <label for="print-type"> Print Type: </label>
          <select id="print-type">
            <option value="all">all</option>
            <option value="free-ebook">free ebook</option>
            <option value="not-free-ebook">not free ebook</option>
          </select>
          <label for="book-type"> Book Type: </label>
          <select id="book-type">
            <option value="no-filter">no filter</option>
            <option value="ebook"> ebook </option>
            <option value="pdf"> pdf </option>
          </select>
        </form>
      </div>
    );
  }
}
export default Filters;

import React from "react";

function Result(props) {
  return (
    <div>
      <h2>{props.title}</h2>
      <img src={props.imeSrc} />
      <h3>{props.author}</h3>
      {/* <p>{this.props.price}</p> */}
      <p>{props.description}</p>
    </div>
  );
}
export default Result;

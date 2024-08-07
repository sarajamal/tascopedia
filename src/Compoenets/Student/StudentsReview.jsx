import React from "react";

class StudensReview extends React.Component{
  render() {

    return (
      <div className="p-2">
        <i
          className="bi bi-hand-thumbs-up-fill text-success p-1"
          style={{ cursor: "pointer" , backgrounColor:"red"}}
        ></i>
        <i
          className="bi bi-hand-thumbs-down-fill text-danger p-1"
          style={{ cursor: "pointer" }}
        ></i>
      </div>
    );
  }
}
export default StudensReview;
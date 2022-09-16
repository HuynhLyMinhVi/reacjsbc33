import React, { Component } from "react";

export default class HendleEvent extends Component {
  hendleClick = (even) => {
    // alert("say hello");
    console.log(even.target.className);
    even.target.className = "btn btn-danger";
  };
  showMessage = (name) => {
    alert("Hello" + name);
  };
  render() {
    return (
      <div className="container">
        <button className="btn btn-dark" onClick={this.hendleClick}>
          Say Hello
        </button>
        <button
          className="btn btn-dark mx-2"
          onClick={(e) => {
            //Gọi nhiều hàm
            this.showMessage("Quach Khai");
            e.target.innerHTML = "hi ! Quach Khai";
          }}
        >
          Say Hello000
        </button>
      </div>
    );
  }
}

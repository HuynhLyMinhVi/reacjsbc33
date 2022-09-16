import React, { Component } from "react";

export default class DemoDataBinding extends Component {
  renderTitle = () => {
    return (
      <div className="bg-dark text-center text-white p-5">
        Cybersoft academy
      </div>
    );
  };
  //DataBinding có thể các giá trị như primitive value (string, boolean, number,....) và jsx
  render() {
    const hoTen = "Quách Khải";
    const prod = {
      id: 1,
      name: "product 1",
      price: 1000,
    };
    
    return (
      <div className="container">
        <h3>Họ tên: {hoTen}</h3>
        <div className="mt-2 w-25">
          <div className="card">
            <img src="http://picsum.photos/200" alt="#" />
            <div className="card-body">
              <p>{prod.name}</p>
              <p>{prod.price}</p>
            </div>
          </div>
        </div>
        {this.renderTitle()}
        
      </div>
    );
  }
}

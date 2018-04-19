import React, { Component } from "react";

export default class CustomSlide extends Component {
  render() {
    const { index, ...props } = this.props;
    return (
      <a href={props.link}>
        <div className="slide" {...props}>
          <div className="card bg-dark text-slide">
            <img
              className="card-img"
              src={props.img}
              key={props.key}
              index={props.index}
              alt={props.title}
            />
            <div className="card-img-overlay">
              <h5 className="card-title">
                <b>{props.title}</b>
              </h5>
            </div>
          </div>
        </div>
      </a>
    );
  }
}

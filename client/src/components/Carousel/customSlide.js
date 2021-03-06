import React, { Component } from "react";

export default class CustomSlide extends Component {
  render() {
    const { index, ...props } = this.props;
    return (
      <a href={props.link}>
        <div className="slide" {...props}>
          <div className="card">
            <img
              className="card-img-top"
              src={props.img}
              index={props.index}
              alt={props.title}
            />
            <div className="card-body">
              <h5 className="card-title text-center">
                <b>{props.title}</b>
              </h5>
            </div>
          </div>
        </div>
      </a>
    );
  }
}
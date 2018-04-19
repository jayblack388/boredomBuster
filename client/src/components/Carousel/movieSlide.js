import React, { Component } from "react";

export default class MovieSlide extends Component {
  render() {
    const { index, ...props } = this.props;
    return (
        <div className="slide" {...props}>
          <div className="card" style={{width: "100%"}}>
            <img
              className="card-img-top"
              src={props.img}
              index={props.index}
              alt={props.title}
            />
            <div className="card-body">
              <h5 className="card-title">
                <b>{props.title}</b>
              </h5>
              <p className="card-text">{props.description}</p>
              <a href={props.link} className="btn btn-tmdb">Visit TMDB for More Info</a>
            </div>
            <div className="card-footer text-muted">{props.release}</div>
          </div>
        </div>
    );
  }
}

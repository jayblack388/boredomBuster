import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./nav.css";
export default class Nav extends Component {
  constructor(props) {
    super(props);
    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
    const collapsed = this.state.collapsed;
    const classOne = collapsed
      ? "collapse navbar-collapse"
      : "collapse navbar-collapse show";
    const classTwo = collapsed
      ? "navbar-toggler navbar-toggler collapsed"
      : "navbar-toggler navbar-toggler";
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark charcoal-nav">
        <div className="container-fluid">
          <button
            onClick={this.toggleNavbar}
            className={classTwo}
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <Link className="navbar-brand" to="/">
              <img src="./logo.png" alt="logo"/>
            </Link>
          <div className={classOne} id="navbarResponsive">
            
            <ul className="navbar-nav">
              <li>
                <Link className="nav-link" to="/video">
                  Video
                </Link>
              </li>
              <li>
                <Link className="nav-link" to="/movie">
                  Movies
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

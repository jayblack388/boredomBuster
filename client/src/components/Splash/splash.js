import React, { Component } from 'react';
import "./splash.css"
import Jumbo from '../Jumbotron';
import Carousel from '../Carousel';
import API from '../../utils/API';


export default class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activities: [],
      select: null
    }
  }

  componentDidMount() {
    API.getActivities()
    .then((activities) => {
        console.log(activities)
        this.setState({
            activities
        })
    })
      
  }

  render() {
      return (
        <div className="container-fluid">
        <Jumbo>
            <img src="./logoWhite.png" alt="Logo"/>
        </Jumbo>
        <h4 className="text-center">See What Others Are Finding</h4>
        <Carousel assets={this.state.activities} />
    </div>
      )
  }
}

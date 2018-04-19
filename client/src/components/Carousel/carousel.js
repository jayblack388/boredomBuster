import React, { Component } from "react";
import Slider from "react-slick";
import CustomSlide from "./customSlide";


export default class SimpleSlider extends Component {
  renderItems() {
    const activities = this.props.assets.data;
    if (!activities) {
      return <div>Loading...</div>;
    }
    return activities.map(activity => {
      return (
        <CustomSlide
          key={activity._id}
          link={activity.link}
          title={activity.title}
          img={activity.img}
          index={activity._id}
          description={activity.description}
        />
      );
    });
  }
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      autoplay: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

    return (
      <div width="100%">
        <Slider {...settings}>{this.renderItems()}</Slider>
      </div>
    );
  }
}

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../assets/scss/Slider.scss";
import Vector from "../../assets/images/vec.svg";
import Apple from "../../assets/images/apple.png";
import Google from "../../assets/images/Google_Podcasts_Logo.png";
import Sound from "../../assets/images/Cloud.svg";

import React, { Component } from "react";
import Slider from "react-slick";

export default class Responsive extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      arrows: false,
      cssEase: "linear",
      responsive: [   
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div className="prd_slider"
        style={{
          paddingBottom: "50px",
        }}
      >
        <Slider {...settings}>
          <div className="slide_1">
            <h5 className="slide_head">Podcasts available on</h5>
          </div>

          <div className="slide_1">
            <img src={Apple} width={39} />
            &nbsp;
            <h5>Apple Podcasts</h5>
          </div>
          <div className="slide_1">
            <img src={Sound} width={39} />
            &nbsp;
            <h5 className="slide_head">SOUNDCLOUD</h5>
          </div>
          <div className="slide_1">
            <img src={Google} width={39} />
            &nbsp;
            <h5>Google Podcasts</h5>
          </div>

          <div className="slide_1">
            <img src={Vector} />
            &nbsp;
            <h5 className="slide_head">Spotify</h5>
          </div>

        </Slider>
      </div>
    );
  }
}

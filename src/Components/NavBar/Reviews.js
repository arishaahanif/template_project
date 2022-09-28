import React, { Component } from "react";
import Slider from "react-slick";
import "../../assets/scss/Reviews.scss";
import Card from "react-bootstrap/Card";
import Star from "../../assets/images/Stars.png";
import Hat from "../../assets/images/hat.jpg";
import Confident from "../../assets/images/confident.png";
import Lether from "../../assets/images/jacket.png"


function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      onClick={onClick}
    />
  );
}

export default class CustomArrows extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
    };
    return (
      <div className="container">
        <div className="reviews_slider">
        <div className="lorem">
          <h4>What our listeners say</h4>
          <p className="para_1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            <span className="block">
              diam nonumy eirmod tempor invidunt ut labore et dolore
            </span>
            magna aliquam erat
          </p>
        </div>
        <Slider {...settings}>
          <div className="ca">
            <Card className="card_1">
              <Card.Body>
                <div className="h_container">
                  <img className="hat_1" src={Hat} />
                  <Card.Title>
                    Eve Madein
                    <img className="star_1" src={Star} />
                  </Card.Title>
                </div>
                <Card.Text className="para">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
                  eget condimentum enim libero ultricies amet odio fringilla. Ut
                  nibh morbi augue porta aliquet commodo. Fermentum auctor lacus
                  eget in ut integer viverra sed. Penatibus tortor consequat.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="ca">
            <Card className="card_1">
              <Card.Body>
                <div className="h_container">
                  <img className="hat_1" src={Lether} />
                  <Card.Title>
                    Ash Benfred
                    <img className="star_1" src={Star} />
                  </Card.Title>
                </div>
                <Card.Text className="para">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
                  eget condimentum enim libero ultricies amet odio fringilla. Ut
                  nibh morbi augue porta aliquet commodo. Fermentum auctor lacus
                  eget in ut integer viverra sed. Penatibus tortor consequat.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="ca">
            <Card className="card_1">
              <Card.Body>
                <div className="h_container">
                  <img className="hat_1" src={Confident} />
                  <Card.Title>
                    Eve Madein
                    <img className="star_1" src={Star} />
                  </Card.Title>
                </div>
                <Card.Text className="para">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
                  eget condimentum enim libero ultricies amet odio fringilla. Ut
                  nibh morbi augue porta aliquet commodo. Fermentum auctor lacus
                  eget in ut integer viverra sed. Penatibus tortor consequat.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="ca">
            <Card className="card_1">
              <Card.Body>
                <div className="h_container">
                  <img className="hat_1" src={Hat} />
                  <Card.Title>
                    Eve Madein
                    <img className="star_1" src={Star} />
                  </Card.Title>
                </div>
                <Card.Text className="para">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
                  eget condimentum enim libero ultricies amet odio fringilla. Ut
                  nibh morbi augue porta aliquet commodo. Fermentum auctor lacus
                  eget in ut integer viverra sed. Penatibus tortor consequat.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </Slider>
        </div>
      </div>
    );
  }
}

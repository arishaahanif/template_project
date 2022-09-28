import "../../assets/scss/Card.scss";
import "../../assets/scss/Main.scss";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Peoples from "../../assets/images/people.png";
import Icons from "../../assets/images/Icon.svg";
import Phone from "../../assets/images/smartphone.png";
import Women from "../../assets/images/women.png";
import Icon1 from "../../assets/images/Episode Icon.svg";

const Episode = () => {
  return (
    <div className="section_4">
      <Container>
          <div className="recent_episodes">
            <div>
            <h4 className="epi">Recent Episodes</h4>
            <p className="para_1">
              Apparently we had reached a great height in the{" "}
              <span>atmosphere, for the sky was a dead black,</span>
            </p>
            </div>
            <div>
            <Button className="btn" variant="">
              See All Episodes
            </Button>{" "}
            </div>
          </div>
          <div className="sub_section">
            <Row>
              <Col lg={4}>
                <Card >
                  <Card.Img variant="top" src={Peoples} />
                  <Card.ImgOverlay>
                    <img className="micro" src={Icon1} />
                  </Card.ImgOverlay>
                  <div class="build">
                    <Card.Title className="title">
                      Ep 1: How to build a world-class bussiness brand
                    </Card.Title>

                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    <div className="l_container">
                      <img src={Icons} />

                      <Button className="btn_2" variant="">
                        Listen Now
                      </Button>
                    </div>
                  </div>
                </Card>
              </Col>
              <Col lg={4}>
                <Card >
                  <Card.Img variant="top" src={Phone} />
                  <Card.ImgOverlay>
                    <img className="micro" src={Icon1} />
                  </Card.ImgOverlay>
                  <div className="build">
                    <Card.Title className="title">
                      Ep 2: Getting the first 100 customers for your bussiness
                    </Card.Title>

                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>

                    <div className="l_container">
                      <img src={Icons} />

                      <Button className="btn_2" variant="">
                        Listen Now
                      </Button>
                    </div>
                  </div>
                </Card>
              </Col>
              <Col lg={4}>
                <Card >
                  <Card.Img variant="top" src={Women} />
                  <Card.ImgOverlay>
                    <img className="micro" src={Icon1} />
                  </Card.ImgOverlay>
                  <div className="build">
                    <Card.Title className="title">
                      Ep 3: Should I raise money for my startup, or not?
                    </Card.Title>

                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>

                    <div className="l_container">
                      <img src={Icons} />

                      <Button className="btn_2" variant="">
                        Listen Now
                      </Button>
                    </div>
                  </div>
                </Card>
              </Col>
            </Row>
          </div>
      </Container>
    </div>
  );
};
export default Episode;

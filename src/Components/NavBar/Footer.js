import "../../assets/scss/Footer.scss";
import { Container, Row, Col } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";
import logo from "../../assets/images/Logo.png";
import Vector from "../../assets/images/vec.svg";
import Apple from "../../assets/images/apple.png";
import Google from "../../assets/images/Google_Podcasts_Logo.png";
import Sound from "../../assets/images/Cloud.svg";

const Footer = () => {
  return (
    <footer>
      <div className="section_5">
        <Container>
          <Row className="center">
            <Col className="first" lg={3} md={3} sm={3} xs={12}>
              <img className="img_logo" src={logo} width={170} />
            </Col>
            <Col className="first" lg={3} md={3} sm={3}xs={12}>
              <ListGroup className="group">
                <h4 className="page">Pages</h4>
                <ListGroup.Item>
                  {" "}
                  <a href="#">Home</a>
                </ListGroup.Item>
                <ListGroup.Item>
                  {" "}
                  <a href="#">Podcast</a>
                </ListGroup.Item>
                <ListGroup.Item>
                  <a href="#">Blog</a>
                </ListGroup.Item>
                <ListGroup.Item>
                  <a href="#">About</a>
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col className="first" lg={3} md={3} sm={3}xs={12}>
              <ListGroup>
                <h4 className="page">Reach us</h4>
                <ListGroup.Item>
                  <a href="#">Contact</a>
                </ListGroup.Item>
                <ListGroup.Item>
                  <a href="#">About</a>
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col className="first" lg={3} md={3} sm={3}xs={12}>
              <ListGroup>
                <h4 className="page">Subscribe</h4>

                <ListGroup.Item>
                  <img src={Apple} width={28} /> &nbsp;{" "}
                  <a href="#">Apple Podcasts</a>
                </ListGroup.Item>
                <ListGroup.Item>
                  <img src={Google} width={28} />
                  &nbsp;<a href="#">Google Podcasts</a>
                </ListGroup.Item>
                <ListGroup.Item>
                  <img src={Sound} width={28} />
                  &nbsp;<a href="#">SOUNDCLOUD</a>
                </ListGroup.Item>
                <ListGroup.Item>
                  <img src={Vector} width={28} />
                  &nbsp;<a href="#">Spotify</a>
                </ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="bottom_footer">
        <p>&copy; Copyright FinSweet 2021</p>
      </div>
    </footer>
  );
};
export default Footer;

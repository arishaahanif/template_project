import { Container, Row, Col } from "react-bootstrap";
import Image from "../../assets/images/fav.png";
import "../../assets/scss/Maker.scss";

const Make = () => {
  return (
    <div className="section_2">
      {/* <Container> */}
      <Row className="center">
        {/* <Container> */}
        <Col lg={6}>
          <div className="maker">
            <h1 className="podcast">
              A podcast for maker and <span>entrepreneurs</span>
            </h1>
            <p className="para_1">
              Apparently we had reached a great height in the{" "}
              <span>atmosphere, for the sky was a dead black and the</span>{" "}
              <span>stars had ceased to twinkle</span>
            </p>
          </div>
        </Col>

        {/* </Container> */}

        <Col lg={6}>
          <div className="main_sec">
            <div className="makes_clients">
              <img className="mak_image" src={Image} />
            </div>
          </div>
        </Col>
      </Row>
      {/* </Container> */}
    </div>
  );
};
export default Make;

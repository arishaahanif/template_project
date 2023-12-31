import "../../assets/scss/Origin.scss";

import { Container, Row, Col } from "react-bootstrap";
import Image_1 from "../../assets/images/img_1.png";

const Origin = () => {
  return (
    <div className="section_3">
        <Row className="center">
        <Col className="amet" lg={6} md={6} sm={6}>
          <img className="cas" src={Image_1} />
        </Col>
        <Col className="amet"  lg={6}md={6} sm={6}> 
         <div className="main">
         <h1 className="podcast">
            My origins on 
            <span className="block">
              <span className="you_tube"> YouTube </span>
              in 2008
            </span>
          </h1>
          <p className="para_1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            <span className="block">
              diam nonumy eirmod tempor invidunt ut labore et dolore
            </span>
            magna aliquam erat
          </p>
         </div>
        </Col>
      </Row>
    </div>
  );
};
export default Origin;

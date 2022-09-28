import { Container, Row, Col } from "react-bootstrap";
import "../../assets/scss/Sub.scss";
import "../../assets/scss/Main.scss";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

const Subscribe = () => {
  return (
    <div className="section_4">
      <Container>
            <div className="bg_image">
              <div className="main_section">
                <h4 className="sub_global_head">
                  Recieve new episodes in your inbox
                </h4>
                <InputGroup> 
                  <Form.Control
                    placeholder="Enter Your Email"
                    aria-label="Enter Your Email"
                    aria-describedby="basic-addon2"
                  />
                  <Button className="btn" variant="" id="button-addon2">
                    Subscribe
                  </Button>
                </InputGroup>
              </div>
            </div>
          </Container>
    </div>
  );
};
export default Subscribe;

import { Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import "../../assets/scss/Story.scss";
import Strip1 from "../../assets/images/Audio_track.png";
import InputGroup from "react-bootstrap/InputGroup";

const Story = () => {
  return (
    <div className="section_1">
      <Container>
        <div className="bec">
          <div className="showcase_area">
            <h1 className="heading_1">
              Become the hero<span>of your own story</span>
            </h1>
            <p className="para_1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              <span>
                diam nonumy eirmod tempor invidunt ut labore et dolore
              </span>
              magna aliquam erat
            </p>
            <InputGroup>
              <Form.Control
                className="p_holder"
                placeholder="Enter Your Email Id"
                aria-label="Enter Your Email Id"
                aria-describedby="basic-addon2"
              />

              <InputGroup.Text className="com" id="basic-addon2">
                Subscribe
              </InputGroup.Text>
            </InputGroup>
          </div>
          <div className="showcase_area">
            <div className="strips">
              <img src={Strip1} />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Story;

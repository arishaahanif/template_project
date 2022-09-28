import "../../assets/scss/Article.scss";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import News from "../../assets/images/Shapes.png";
import Bitcoin from "../../assets/images/dollar-bills.png";
import Gadget from "../../assets/images/gadgets.png";

const Articles = () => {
  return (
    <div className="crd_area">
      <Container>
        <Row>
          <Col lg={4}>
          <div className="crd1">
      <img src={News} alt="Card image" /> 
      <Card.ImgOverlay>
        <Card.Title className="titles">Read our <span>
        articles & news
        </span>
 </Card.Title>
<Button className="btn" variant="">See more</Button>

        
      </Card.ImgOverlay>
    </div>
            {/* <div className="b_card">
              <Card>
                 <Card.Img variant="top" src={} />
                <Card.ImgOverlay>
                  <div class="build">
                    <Card.Title className="title">
                      <h4>Read our articles and news</h4>
                    </Card.Title>
                      <img className="news_1" src={News} />
                    
                  </div>
                </Card.ImgOverlay>
              </Card>
            </div>  */}
          </Col>
          <Col lg={4}>
              <Card className="crd">
                <Card.Img variant="" src={Bitcoin} />
                <Card.Body>
                  <Card.Title>
                    {" "}
                    Getting the first 100 customers for your bussiness
                  </Card.Title>
                  <Card.Text>
                    Lorem ipsum at vero eos et accusam et justo duo dolores et
                    ea rebum.
                  </Card.Text>
                  <Button className="btn" variant="">Read Now</Button>
                </Card.Body>
              </Card>
          </Col>

          <Col lg={4}>
              <Card className="crd">
                <Card.Img variant="" src={Gadget} />
                <Card.Body>
                  <Card.Title>
                    Apparently we had reached a great height in the atmosphere,
                  </Card.Title>
                  <Card.Text>
                    Lorem ipsum at vero eos et accusam et justo duo dolores et
                    ea rebum.
                  </Card.Text>
                  <Button className="btn" variant="">Read Now</Button>
                </Card.Body>
              </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Articles;

import React from "react";
import { Container } from "react-bootstrap";
import "../../assets/scss/Main.scss";
import "../../assets/scss/Sponsors.scss";
import logos_1 from "../../assets/images/Logos_1.svg";
import logos_2 from "../../assets/images/Logos_2.svg";
import logos_3 from "../../assets/images/Logos_3.svg";
import logos_4 from "../../assets/images/Logos_4.svg";
import logos_5 from "../../assets/images/Logos_5.svg";

const Sponsors = () => {
  return (
    <Container>
      <section className="section_6">
        <div className="sponsors">
          <h4 class="sub_global_head">Our Sponsors</h4>
          <div className="brands">
            <img src={logos_1} />

            <img src={logos_2} />

            <img src={logos_3} />

            <img src={logos_4} />

            <img src={logos_5} />
          </div>
        </div>
      </section>
    </Container>
  );
};

export default Sponsors;

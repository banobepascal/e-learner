import React from "react";
import { Card } from "react-bootstrap";

import HeaderImg from "../../components/Header-Img/Header-Img.component";
import {
  AboutPageContainer,
  AboutDetailsContainer,
  ReviewCards,
} from "./About-Page.styles";

const AboutPage = () => {
  return (
    <AboutPageContainer>
      <HeaderImg>
        <h4>ABOUT</h4>
      </HeaderImg>
      <h3>Don't waste your valuable time or money</h3>
      <h5>
        Learn for free with <span>E LEARNER</span>
      </h5>
      <AboutDetailsContainer>
        <Card style={{ width: "18rem" }}>
          <ReviewCards>
            <i className="fas fa-user-md" style={{ color: "#0A69D5" }}></i>
            <h4>Get real employable skills</h4>
            <p>
              Our quality curriculum is designed with top-tier industry
              partners, not academics, so you learn the high-impact skills that
              top companies want
            </p>
          </ReviewCards>
        </Card>
        <Card style={{ width: "18rem" }}>
          <ReviewCards>
            <i className="far fa-lightbulb" style={{ color: "#FF9F33" }}></i>
            <h4>Project-based, active learning</h4>
            <p>
              Learn by doing with real-world projects and other hands-on
              exercises that lead to real skills mastery.
            </p>
          </ReviewCards>
        </Card>
        <Card style={{ width: "18rem" }}>
          <ReviewCards>
            <i className="far fa-clock" style={{ color: "#51A82F" }}></i>
            <h4>Learn on your schedule</h4>
            <p>
              Self-paced learning - whenever and wherever you want. Graduate
              while learning part-time for 10 hrs/week.
            </p>
          </ReviewCards>
        </Card>
        <Card style={{ width: "18rem" }}>
          <ReviewCards>
            <i className="far fa-comments" style={{ color: "#C459C4" }}></i>
            <h4>The help you need</h4>
            <p>
              Reach out to our mentors 24/7 and have your coding questions
              answered quickly so you can keep learning.
            </p>
          </ReviewCards>
        </Card>
      </AboutDetailsContainer>
    </AboutPageContainer>
  );
};

export default AboutPage;

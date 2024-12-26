import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "../../utility/Button/Button";
import "./Banner.css";
import bannerImage from "../../../../public/images/banner.png";
import Circle from "./Circle/Index";

const Banner = () => {
  return (
    <>
      <div className="position-relative mt-5 mt-md-0">
        {/* Container */}
        <Container fluid className="p-0">
          <Row className="g-0">
            <Col
              xs-12
              md={{ span: 5, offset: 1 }}
              className="order-2 order-md-1 px-3 px-md-0 pe-md-3"
            >
              {/* Banner Info */}
              <div className="banner-info mt-5 mt-md-0">
                {/* Title */}
                <h2 className="banner-title">
                  Discover Your Dream <br /> Property with Estatein
                </h2>
                {/* SubTitle */}
                <span className="banner-subtitle">
                  Your journey to finding the perfect property begins here.
                  Explore our listings to find the home that matches your
                  dreams.
                </span>
              </div>

              {/* Browse Content */}
              <div className="browse-content">
                <Button color="grey-8" buttonType="outline" elementType="a">
                  Learn More
                </Button>
                <Button elementType="a">Browse Properties</Button>
              </div>

              {/* Site count information */}
              <div className="site-information">
                <div className="site-information-item">
                  <h2>200+</h2>
                  <span>Happy Customers</span>
                </div>
                <div className="site-information-item">
                  <h2>200+</h2>
                  <span>Happy Customers</span>
                </div>
                <div className="site-information-item">
                  <h2>200+</h2>
                  <span>Happy Customers</span>
                </div>
              </div>
            </Col>
            <Col xs-12 md="6" className="order-1 order-md-2 position-relative">
              {/* Circle */}
              <Circle />
              <div className="banner-image">
                <img src={bannerImage} alt="Banner Image" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Banner;

import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import "../../styles/about-section.css";
import aboutImg from "../../assets/images/cars/mercedes-offer.png";

const AboutSection = ({aboutClass}) => {
  return (
    <section className='about_section' style={aboutClass === 'aboutPage' ? {marginTop: '0px'} : {marginTop: '280px'}}>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="about_section-content">
              <h4 className="section_subtitle">About Us</h4>
              <h2 className="section_title">Welcome to car rent service</h2>
              <p className="section_description">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia
                consequatur repellendus ex exercitationem et, quos omnis debitis
                odit, aspernatur cum corporis. Consequatur, officia. Voluptatum
                deleniti, eum debitis eius adipisci consectetur!
              </p>

              <div className="about_section-item d-flex align-items-center">
                <p className="section_description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> Lorem ipsum dolor sit
                  amet.
                </p>

                <p className="section_description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> Lorem ipsum dolor sit
                  amet.
                </p>
              </div>
              <div className="about_section-item d-flex align-items-center">
                <p className="section_description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> Lorem ipsum dolor sit
                  amet.
                </p>

                <p className="section_description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> Lorem ipsum dolor sit
                  amet.
                </p>
              </div>
            </div>
          </Col>

                  <Col lg="6" md="6">
                      <div className="about_img">
                          <img src={aboutImg} alt="" className='w-100' />
                      </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default AboutSection

import React from 'react'

import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap'
import { Link } from 'react-router-dom';
import '../../styles/footer.css';

const quickLinks = [
  {
    path: "/about",
    display: "About",
  },
  {
    path: "#",
    display: "Privacy Policy",
  },
  {
    path: "/cars",
    display: "Car Listing",
  },
  {
    path: "/blogs",
    display: "Blog",
  },
  {
    path: "/contact",
    display: "Contact",
  },
];

const Footer = () => {

  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="4" md="4" sm="12">
            <div className="logo footer_logo">
              <h1>
                <Link to="/home" className="d-flex align-items-center gap-2">
                  <i class="ri-car-line"></i>
                  <span>
                    Rent Car <br /> Service
                  </span>
                </Link>
              </h1>
            </div>
            <p className="footer_logo_content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A libero
              animi quae vitae nesciunt distinctio. Blanditiis reprehenderit
              assumenda quod atque itaque sit laborum mollitia aut! Fugiat
              commodi autem facilis enim.
            </p>
          </Col>
          <Col lg="2" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer_link_title">Quick Links</h5>
              <ListGroup>
                {quickLinks.map((item, index) => (
                  <ListGroupItem key={index} className="p-0 mt-3 quick_link">
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </div>
          </Col>

          <Col lg="3" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer_link_title mb-4">Head Office</h5>
              <p className="office_info">368 Parkview, San Jose, California</p>
              <p className="office_info">Phone: +1-706-933-2675</p>
              <p className="office_info">Email: xenoxrac@gmail.com</p>
              <p className="office_info">Office Time: 8am - 9pm</p>
            </div>
          </Col>

          <Col lg="3" md="4" sm="12">
            <div className="mb-4">
              <h5 className="footer_link_title">Newsletter</h5>
              <p className="section_description">Subscribe our newsletter</p>
              <div className="newsletter">
                <input type="email" placeholder='Email' />
                <span>
                  <i class="ri-send-plane-line"></i>
                </span>
              </div>
            </div>
          </Col>

          <Col lg="12">
            <div className="footer_bottom">
              <p className="section_description d-flex justify-content-center gap-1 pt-4">
                <i class="ri-copyright-line"></i>Copyright {year}, Developed by Muhibur Rahman. All rights reserved.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer

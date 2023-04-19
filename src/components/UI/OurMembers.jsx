import React from "react";
import "../../styles/our-members.css";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";
import ava01 from "../../assets/images/ava-1.jpg";
import ava02 from "../../assets/images/ava-2.jpg";
import ava03 from "../../assets/images/ava-3.jpg";

const OUR_MEMBERS = [
  {
    name: "John Doe",
    experience: "5 years of experience",
    fbUrl: "#",
    instUrl: "#",
    twitUrl: "#",
    linkedinUrl: "#",
    imgUrl: ava01,
  },
  {
    name: "Lisa David",
    experience: "5 years of experience",
    fbUrl: "#",
    instUrl: "#",
    twitUrl: "#",
    linkedinUrl: "#",
    imgUrl: ava02,
  },
  {
    name: "Hilton King",
    experience: "5 years of experience",
    fbUrl: "#",
    instUrl: "#",
    twitUrl: "#",
    linkedinUrl: "#",
    imgUrl: ava03,
  },
  {
    name: "Lisa David",
    experience: "5 years of experience",
    fbUrl: "#",
    instUrl: "#",
    twitUrl: "#",
    linkedinUrl: "#",
    imgUrl: ava02,
  },
];

const OurMembers = () => {
  return (
    <>
      {OUR_MEMBERS.map((item, index) => (
        <Col lg="3" md="3" sm="4" xs="6" key={index} mb-4>
          <div className="single_member">
            <div className="single_member-img">
              <img src={item.imgUrl} alt="" className="w-100" />

              <div className="single_member-social">
                <Link to={item.fbUrl}>
                  <i class="ri-facebook-line"></i>
                </Link>
                <Link to={item.twitUrl}>
                  <i class="ri-twitter-line"></i>
                </Link>
                <Link to={item.linkedinUrl}>
                  <i class="ri-linkedin-line"></i>
                </Link>
                <Link to={item.instUrl}>
                  <i class="ri-instagram-line"></i>
                </Link>
              </div>
            </div>

            <h6 className="text-center mb-0 mt-3">{item.name}</h6>
            <p className="section_description text-center">{item.experience}</p>
          </div>
        </Col>
      ))}
    </>
  );
};

export default OurMembers;

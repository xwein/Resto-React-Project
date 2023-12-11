import React from "react";

import { SubHeading } from "../../components";
import "./FindUs.css";
import { images } from "../../constants";

const FindUs = () => (
  <div className="app__findus flex__center section__padding app__bg">
    <div className="app__findus-content">
      <div className="app__findus-content_title">
        <SubHeading title="Contact" />
        <h1 className="headtext__cormorant">Find Us</h1>
      </div>

      <div className="app__findus-content-text">
        <p>123 Serendipity Street, Quirkland 56789 Wonderland</p>
        <h2>Opening Hours</h2>
        <p style={{ color: "#FFF", fontFamily: "open sans", fontSize: "1rem" }}>
          Mon - Fri: 10:00 am - 02:00 am
        </p>
        <p style={{ color: "#FFF", fontFamily: "open sans", fontSize: "1rem" }}>
          Sat - Sun: 10:00 am - 03:00 am{" "}
        </p>
      </div>
      <button className="custom__button" type="button">
        Visit Us
      </button>
    </div>
    <div className="app__findus-img">
      <img src={images.findus} alt="findus-img" />
    </div>
  </div>
);

export default FindUs;

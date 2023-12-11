import React from "react";

import "./Chef.css";
import { images } from "../../constants";
import { SubHeading } from "../../components";

const Chef = () => (
  <div className="app__chef flex__center section__padding app__bg" id="chef">
    <div className="app__chef-img">
      <img src={images.chef} alt="chef-img" />
    </div>

    <div className="app__chef-content">
      <div className="app__chef-content_title">
        <SubHeading title="Chef's word" />
        <h1 className="headtext__cormorant">What We Believe In</h1>
      </div>
      <div className="app__chef-content_text">
        <p className="app__chef-content_p">
          <img src={images.quote} alt="quote_image" />
          As Gericht's Chef, my culinary philosophy transcends the ordinary,
          fusing passion with precision. Each dish is a masterpiece,
          meticulously crafted to elevate your dining experience, promising a
          symphony of flavors that linger in memory.
        </p>
      </div>

      <div className="app__chef-content_name-p">
        <p>Kevin Luo</p>
        <p>Chef & Founder</p>
      </div>

      <img
        className="app__chef-content_imgSign"
        src={images.sign}
        alt="chef-sign"
      />
    </div>
  </div>
);

export default Chef;

import React from "react";
import { images } from "../../constants";

import "./Laurels.css";
import { SubHeading } from "../../components";

const Laurels = () => (
  <div
    className="app__laurels flex__center section__padding app__bg"
    id="laurels"
  >
    <img src={images.logo} alt="laurels-logo" className="app__laurels-logo" />
    <div className="app__laurels-content">
      <div className="app_laurels-content_title">
        <SubHeading title="Award & Recognition" />
        <h1 className="headtext__cormorant">Our Laurels</h1>
      </div>
      <div className="app__laurels-content_awards-container">
        <div className="app__laurels-content_awards-element">
          <img src={images.award02} alt="award-img" />
          <div className="app__laurels-content_awards-element_text">
            <h2 className="app__laurels-content_awards-element_text-h2">
              Bib Gourmond
            </h2>
            <p className="app__laurels-content_awards-element_text-p">
              Affordable excellence; indulge in a gourmet yet accessible
              experience.
            </p>
          </div>
        </div>
        <div className="app__laurels-content_awards-element">
          <img src={images.award01} alt="award-img" />
          <div className="app__laurels-content_awards-element_text">
            <h2 className="app__laurels-content_awards-element_text-h2">
              Rising Star
            </h2>
            <p className="app__laurels-content_awards-element_text-p">
              Shining bright, defining tomorrow's gastronomic landscape with
              innovation.
            </p>
          </div>
        </div>
        <div className="app__laurels-content_awards-element">
          <img src={images.award05} alt="award-img" />
          <div className="app__laurels-content_awards-element_text">
            <h2 className="app__laurels-content_awards-element_text-h2">
              AA Hospitality
            </h2>
            <p className="app__laurels-content_awards-element_text-p">
              Exceptional warmth, impeccable service—our hallmark hospitality
              triumphs.
            </p>
          </div>
        </div>
        <div className="app__laurels-content_awards-element">
          <img src={images.award03} alt="award-img" />
          <div className="app__laurels-content_awards-element_text">
            <h2 className="app__laurels-content_awards-element_text-h2">
              Outstanding Chef
            </h2>
            <p className="app__laurels-content_awards-element_text-p">
              Culinary genius celebrated—each dish, a masterpiece unveiled.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="app__laurels-img">
      <img src={images.laurels} alt="laurels-img" />
    </div>
  </div>
);

export default Laurels;

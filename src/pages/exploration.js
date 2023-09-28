import React, { useState } from "react";
import "../assets/css/exploration.css";
import explore from "../assets/images/explore.jpg";
import launch from "../assets/images/launched.jpg";
import crew7 from "../assets/images/crew7.jpg";
import { Popup1, Popup2, Popup3 } from "../components/explorepopup.js"; // Import the separate Popup components
import Helmet from '../components/Helmet/Helmet';

const Exploration = () => {
  // State and toggle function for the first section's pop-up
  const [showPopup1, setShowPopup1] = useState(false);
  const togglePopup1 = () => {
    setShowPopup1(!showPopup1);
  };

  // State and toggle function for the second section's pop-up
  const [showPopup2, setShowPopup2] = useState(false);
  const togglePopup2 = () => {
    setShowPopup2(!showPopup2);
  };

  // State and toggle function for the third section's pop-up
  const [showPopup3, setShowPopup3] = useState(false);
  const togglePopup3 = () => {
    setShowPopup3(!showPopup3);
  };

  return (
    <Helmet title='Exploration'>
    <div className="exploreBody">
      {/* First section */}
      <div className="exploreHero">
        <div className="heroTxt">
          <h5>Mission</h5>
          <p className="apolo">Apollo 11 Moon Landing</p>
          <button className="learn-more-button" onClick={togglePopup1}>
            Learn More
          </button>
        </div>
        <a className="exploreHero-image">
          <img className="heroimage1" src={launch} alt="rocket" style={{marginTop:"-78px"}}/>
        </a>
      </div>

      {/* Render the first section's pop-up */}
      <Popup1 showPopup={showPopup1} togglePopup={togglePopup1} />

      {/* Second section */}
      <div className="exploreHero">
        <div className="heroTxt">
          <h5>Mission</h5>
          <p  className="apolo">DRAGON AND CREW-6</p>
          <button className="learn-more-button" onClick={togglePopup2}>
            Learn More
          </button>
        </div>
        <a className="exploreHero-image">
          <img src={explore} alt="rocket" />
        </a>
      </div>

      {/* Render the second section's pop-up */}
      <Popup2 showPopup={showPopup2} togglePopup={togglePopup2} />

      {/* Third section */}
      <div className="exploreHero">
        <div className="heroTxt">
          <h5>Mission</h5>
          <p  className="apolo">ISS Expedition 1</p>
          <button className="learn-more-button" onClick={togglePopup3}>
            Learn More
          </button>
        </div>
        <a className="exploreHero-image">
          <img src={crew7} alt="rocket" />
        </a>
      </div>

      {/* Render the third section's pop-up */}
      <Popup3 showPopup={showPopup3} togglePopup={togglePopup3} />
    </div>
    </Helmet>
  );
};

export default Exploration;
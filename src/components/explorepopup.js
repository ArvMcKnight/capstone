import React from "react";
import armstrong from "../assets/images/armstrong.jpg"
import aldrin from "../assets/images/aldrin.jpg"
import collins from "../assets/images/collins.jpg"
import alneyadi from "../assets/images/alneyadi.jpg"
import bowen from "../assets/images/bowen.jpg"
import hoburg from "../assets/images/hoburg.jpg"
import fedyaev from "../assets/images/fedyaev.jpg"
import shepherd from "../assets/images/shepherd.jpg"
import gidzenko from "../assets/images/gidzenko.jpg"
import krikalev from "../assets/images/krikalev.jpg"

import "../assets/css/explorepopup.css"


// Popup component for the first section
const Popup1 = ({ showPopup, togglePopup }) => {
    window.addEventListener("keydown",(e) =>{
        if(e.key === "Escape" && showPopup) {
            togglePopup()
        }
    })
  return (
    showPopup && (
      <div className="explorepopup">
        {/* Content of the pop-up box for the first section */}
        <div className="top">
        <div className="exploreHead">
        <h3 className="Title">Apollo 11</h3>
        <p className="date">2003/19/10</p>
        </div>
        
        <div className="crewImage">
            <a>
                <div className="top-image">
                <img src={armstrong} />
                </div>
                <p>Niel Armstrong</p>
            </a>
            <a>
                <div className="top-image">
                <img src={aldrin} />
                </div>
                <p>Edwin 'Buzz' Aldrin</p>
            </a>
            <a> <div className="top-image">
                <img src={collins} />
                </div>
                <p>Michael Collins</p>
            </a>
        </div>
        </div>
        
        <div className="text">
            <h4>Mission Objective</h4>
            <p>The primary objective of Apollo 11 was to complete a national goal set by President John F. Kennedy on May 25, 1961: perform a crewed lunar landing and return to Earth.</p>

            <p>Additional flight objectives included scientific exploration by the lunar module, or LM, crew; deployment of a television camera to transmit signals to Earth; and deployment of a solar wind composition experiment, seismic experiment package and a Laser Ranging Retroreflector. During the exploration, the two astronauts were to gather samples of lunar-surface materials for return to Earth. They also were to extensively photograph the lunar terrain, the deployed scientific equipment, the LM spacecraft, and each other, both with still and motion picture cameras. This was to be the last Apollo mission to fly a "free-return" trajectory, which would enable a return to Earth with no engine firing, providing a ready abort of the mission at any time prior to lunar orbit insertion.</p>
        </div>
        <button className="close-button" onClick={togglePopup}>
          &times;
        </button>
      </div>
    )
  );
};

// Popup component for the second section
const Popup2 = ({ showPopup, togglePopup }) => {
     window.addEventListener("keydown",(e) =>{
        if(e.key === "Escape" && showPopup) {
            togglePopup()
        }
    })
  return (
    showPopup && (
      <div className="explorepopup">
        {/* Content of the pop-up box for the second section */}
        <div className="top">
        <div className="exploreHead">
        <h3 className="Title">DRAGON AND CREW-6</h3>
        <p className="date">2003/19/10</p>
        </div>
        
        <div className="crewImage">
            <a>
                <div className="top-image">
                <img src={fedyaev} />
                </div>
                <p>Andrey Fedyaev</p>
            </a>
            <a>
                <div className="top-image">
                <img src={bowen} />
                </div>
                <p>Stephen Bowen</p>
            </a>
            <a> <div className="top-image">
                <img src={alneyadi} />
                </div>
                <p>Sultan Alneyadi</p>
            </a>
            <a> <div className="top-image">
                <img src={hoburg} />
                </div>
                <p>Warren "Woody" Hoburg</p>
            </a>
        </div>
        </div>
        
        <div className="text">
            <h4>Mission</h4>
            <p>The sixth SpaceX operational mission in the Commercial Crew Program (CCP) was launched on 2 March 2023 and lasted approximately six months. The mission was scheduled to launch early on 27 February 2023. However, the initial attempt was scrubbed and rescheduled for 2 March 2023, at 5:34 am UTC.[1][2][3] The second launch attempt was successful.</p>

            <p>Alongside Crew-6, the Dragon capsule is designed to be able to bring back the Soyuz MS-22 crew if necessary, serving as an emergency evacuation, as was Crew-5. Roscosmos elected to launch Soyuz MS-23 without a crew to return the MS-22 crew instead of using this capability.</p>
        </div>
        <button className="close-button" onClick={togglePopup}>
          &times;
        </button>
      </div>
    )
  );
};

// Popup component for the third section
const Popup3 = ({ showPopup, togglePopup }) => {
    window.addEventListener("keydown",(e) =>{
        if(e.key === "Escape" && showPopup) {
            togglePopup()
        }
    })
  return (
    showPopup && (
      <div className="explorepopup">
        {/* Content of the pop-up box for the third section */}
        <div className="top">
        <div className="exploreHead">
        <h3 className="Title">ISS Expedition 1</h3>
        <p className="date">November 2000</p>
        </div>
        
        <div className="crewImage">
            <a>
                <div className="top-image">
                <img src={shepherd} />
                </div>
                <p>William "Bill" Shepherd</p>
            </a>
            <a>
                <div className="top-image">
                <img src={gidzenko} />
                </div>
                <p>Yuri Pavlovich Gidzenko</p>
            </a>
            <a> <div className="top-image">
                <img src={krikalev} />
                </div>
                <p>Sergei Konstantinovich Krikalev</p>
            </a>
        </div>
        </div>
        
        <div className="text">
            <h4>Mission</h4>
            <p>Expedition 1 marked a historic milestone in human space exploration as it inaugurated the first long-term human presence on the International Space Station (ISS). Launched on October 31, 2000, this mission aimed to demonstrate the viability of humans living and working aboard the ISS for extended durations. The crew, consisting of American astronaut William M. Shepherd and Russian cosmonauts Yuri P. Gidzenko and Sergei K. Krikalev, undertook the crucial task of operating and maintaining the station's systems, conducting scientific experiments, and preparing the ISS for future expansion. </p>

            <p>Beyond its operational duties, Expedition 1 also symbolized international collaboration in space exploration. It showcased the successful partnership between the United States and Russia in the operation of the ISS, highlighting the potential for cooperation among different nations in the pursuit of scientific research and human spaceflight. Expedition 1 laid the foundation for the continuous human occupation of the ISS, transforming it into a hub for scientific inquiry and a stepping stone for future endeavors in space exploration.</p>
        </div>
        <button className="close-button" onClick={togglePopup}>
          &times;
        </button>
      </div>
    )
  );
};

export { Popup1, Popup2, Popup3 };
import React from "react";
import { Link } from "react-router-dom";
import './footer.css';
import appIcon from "../../assets/images/icons8-radio-waves-50 (1).png";

import { useLocation   } from "react-router-dom";//chaker

function Footer() {
  const location = useLocation();//chaker
  const pathname = location.pathname?.toString();//chaker


  if (pathname.includes("/Course/") && pathname.includes("/sections/")) {//chaker
    return null;
  }


  return (
    <footer>
      <div className="container567">
        <div className="row">
          <div className="col" id="company">
            <div className="tumpo"><img src={appIcon} className="applicationIcon" alt="logo" /><span className="appNameHeader" >TempoTutor</span></div>
            <p>
             This website can offer a variety of features, such as access to sheet music, music theory lessons, and practice exercises.
            </p>
            <div className="social">
              <Link to="#">
                <i className="fab fa-facebook"></i>
              </Link>
              <Link to="#">
                <i className="fab fa-instagram"></i>
              </Link>
              <Link to="#">
                <i className="fab fa-youtube"></i>
              </Link>
              <Link to="#">
                <i className="fab fa-twitter"></i>
              </Link>
              <Link to="#">
                <i className="fab fa-linkedin"></i>
              </Link>
            </div>
          </div>

          <div className="col" id="services">
            <span>Instrements</span>
            <div className="links">
              <Link to="/teachers">Teachers</Link>
              <Link to="/searchCours">All Courses</Link>
              <Link to="/searchCours">Search</Link>
            </div>
          </div>

          <div className="col" id="useful-links">
            <span>Links</span>
            <div className="links">
              <Link to="/About">About</Link>
              <Link to="#">Services</Link>
              <Link to="#">Our Policy</Link>
            </div>
          </div>

          <div className="col" id="contact">
            <span>Contact</span>
            <div className="contact-details">
              <i className="fa fa-location"></i>
              <p>
              TempoTutor@gmail.com
              </p>
            </div>
            <div className="contact-details">
              <i className="fa fa-phone"></i>
              <p>
                +961-875585
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;


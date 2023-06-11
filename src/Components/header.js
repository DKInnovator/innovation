import React from "react";
import { Link } from "react-router-dom";

import "./header.css";
const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="container-fluid">
          <Link to="#" className="navbar-brand">
            <img
              src="./logo.png"
              alt="Logo "
              width={"110px"}
              height={"120px"}
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon "></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav d-flex headerul">
              <li className="nav-item">
                <Link to="/" className="nav-link " aria-current="page">
                  Home
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  to="/"
                  className="nav-link dropdown-toggle"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Courses
                </Link>
                <ul
                  className="dropdown-menu headerul"
                  aria-labelledby="navbarDropdown"
                >
                  <li>
                    <Link to="courses/c1" className="dropdown-item">
                      IOT(Internet Of Things)
                    </Link>
                  </li>
                  <li>
                    <Link to="courses/c2" className="dropdown-item">
                      Embeded System
                    </Link>
                  </li>
                  <li>
                    <Link to="courses/c3" className="dropdown-item">
                      PCB Designs
                    </Link>
                  </li>
                  <li>
                    <Link to="courses/c4" className="dropdown-item">
                      IOT Web Development
                    </Link>
                  </li>
                  <li>
                    <Link to="courses/c5" className="dropdown-item">
                      IOT Mobile Development
                    </Link>
                  </li>
                  <li>
                    <Link to="courses/c6" className="dropdown-item">
                      Electric Vehicle
                    </Link>
                  </li>
                  <li className="nav-item dropend">
                    <Link
                      to="/"
                      className="nav-link dropdown-toggle"
                      id="navbarDropdownagain"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Basic Computer Skills
                    </Link>
                    <ul
                      className="dropdown-menu headerul"
                      aria-labelledby="navbarDropdownagain"
                    >
                      <li>
                        <Link to="courses/c7/s1" className="dropdown-item">
                          MS Excel
                        </Link>
                      </li>
                      <li>
                        <Link to="courses/c7/s2" className="dropdown-item">
                          MS Word
                        </Link>
                      </li>
                      <li>
                        <Link to="courses/c7/s3" className="dropdown-item">
                          MS Powerpoint
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link to="/Career" className="nav-link">
                  Career
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Aboutus" className="nav-link">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Contactus" className="nav-link">
                  Contact Us
                </Link>
              </li>
            </ul>
            <div className="social-part">
              <Link to="/Aboutus">
                <i
                  className="fa-brands fa-facebook fa-lg"
                  style={{ paddingRight: "50px" }}
                ></i>
              </Link>
              <Link to="/Aboutus">
                <i
                  className="fa-brands fa-square-instagram fa-lg"
                  style={{ color: "#c81e81", paddingRight: "50px" }}
                ></i>
              </Link>
              <Link to="/Aboutus">
                <i
                  className="fa-brands fa-youtube fa-lg"
                  style={{ color: "#d92020", paddingRight: "50px" }}
                ></i>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;

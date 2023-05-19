import React from "react";
import { Link } from "react-router-dom";
import { BsTwitter } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";
import { BsYoutube } from "react-icons/bs";
import { FiHeadphones } from "react-icons/fi";
import "./Header.scss";

const Header = () => {
  return (
    <>
      <div className="custom__navbar">
        <div className="custom__navbar__1">
          <div className="custom__navbar__1__left">
            <h4>Now Hiring: </h4>{" "}
            <p>Are you a driven and motivated 1st Line IT Support Engineer?</p>
          </div>
          <div className="custom__navbar__1__right">
            <div className="custom__navbar__1__right__icon">
              <FaFacebook />
            </div>
            <div className="custom__navbar__1__right__icon">
              <BsTwitter />
            </div>
            <div className="custom__navbar__1__right__icon">
              <AiFillLinkedin />
            </div>
            <div className="custom__navbar__1__right__icon">
              <BsYoutube />
            </div>
          </div>
        </div>
        <div className="line"></div>
        <div className="custom__navbar__2">
          <div className="custom__navbar__2__left">
            <div className="custom__navbar__2__left__img">
              <img
                src="https://preview.colorlib.com/theme/itlock/assets/img/logo/logo.png.webp"
                alt=""
              />
            </div>
            <div className="custom__navbar__2__left__routes">
              <ul>
                <Link to="/">Home</Link>
                <Link to="/add">Add</Link>
              </ul>
            </div>
          </div>
          <div className="custom__navbar__2__right">
            <button >Free Quote</button>
            <div className="question">
              <div className="icon"><FiHeadphones /></div>
              <div className="qstn"> <p className="up">Have any Question?</p>
            <p className="down">Call: 10 (78) 837 3647</p></div>
           
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;

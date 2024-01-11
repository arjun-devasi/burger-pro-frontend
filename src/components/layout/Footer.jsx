import React from "react";
import {
  AiFillFacebook,
  AiFillLinkedin,
  AiFillYoutube,
  AiFillGoogleCircle,
  AiFillInstagram,
} from "react-icons/ai";
const Footer = () => {
  return (
    <div className="main-footer">
      <footer>
        <div>
          <h2>Yummy Burger</h2>
          <p>Bite into Joy: Where Every Burger Tells a Delicious Story!</p>
        </div>
        <div>
          <h3>Follow Us</h3>
          <a href="facbook.com">
            <AiFillFacebook />
          </a>
          <a href="google.com">
            <AiFillGoogleCircle />
          </a>
          <a href="linkedin.com">
            <AiFillLinkedin />
          </a>
          <a href="youtube.com">
            <AiFillYoutube></AiFillYoutube>
          </a>
          <a href="instagram.com">
            <AiFillInstagram />
          </a>
          {/* <hr className="hrrow" /> */}
        </div>
      </footer>
      <div className="footer-box"></div>
    </div>
  );
};

export default Footer;

import React from "react";
import { AiFillLinkedin, AiFillInstagram, AiFillGithub } from "react-icons/ai";
const Footer = () => {
  return (
    <footer>
      <div>
        <h1>TECHYSTAR</h1>
        <p>@NIHAR PATEL 2022</p>
      </div>
      <div>
        <h5>Follow Us</h5>
        <div>
          <div>
            <AiFillLinkedin />
            <a href="https://www.google.co.in/">LINKEDIN</a>
          </div>
          <div>
            <AiFillInstagram />
            <a href="https://www.google.co.in/">INSTAGRAM</a>
          </div>
          <div>
            <AiFillGithub />
            <a href="https://www.google.co.in/">GITHUB</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

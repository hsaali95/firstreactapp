import React from "react";
import "./header.css";
import logo1 from "../Images/logo1.jpg";
const Header = () => {
  return (
    <section className="HeaderSection">
      <div className="LogoSection">
        <img src={logo1} />
      </div>

      <div className="NavLinks">
        <ul>
          <li>HOME</li>
          <li>STORY</li>
          <li>FLAVOURS</li>
          <li>BLOG</li>
          <li>WHOLESALE</li>
        </ul>
      </div>
    </section>
  );
};
export default Header;

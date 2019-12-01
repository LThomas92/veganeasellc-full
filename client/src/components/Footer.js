import React from "react";
import Instagram from "../img/instagram.svg";
import Email from "../img/email.svg";

const Footer = () => {
  return (
    <React.Fragment>
      <div className="footer-container">
        <div className="footer-icons">
          <a
            href="https://www.instagram.com/the_veganease"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Instagram} alt="Instagram Icon" className="footer-icon" />
          </a>
          <a href="mailto:veganeasellc@gmail.com">
            <img src={Email} alt="Email Icon" className="footer-icon" />
          </a>
        </div>
        <div className="footer-text">
          <p>Copyright &copy; 2019. All Rights Reserved.</p>
          <p>Designed By Lawrence Thomas</p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Footer;

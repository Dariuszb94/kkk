import React from "react";
import logo from "../../../Assets/group-12-copy-5.svg";

const ContactDetails = () => {
  return (
    <div className="footer__content">
      <div className="footer__content__mail">
        <div className="mail__text">adres e-mail</div>
        <br />
        <a href="mailto:scomi@scomi.pl" className="mail__address">
          scomi@scomi.pl
        </a>
      </div>

      <div className="footer__content__telefon">
        <div className="telefon__text">numer telefonu</div>
        <br />
        <div className="telefon__content">
          Mirosław Skorek - <a href="tel:+48601542606">601 542 606</a>
        </div>
        <br />
        <div className="telefon__content">
          Wojciech Borecki - <a href="tel:+48601786159">601 786 159</a>
        </div>
      </div>
      <img className="footer__logo" src={logo} />
    </div>
  );
};

export default ContactDetails;

import React from "react";
import ContactDetails from "./FooterComponents/ContactDetails";
import "./FooterStyle.scss";

const MainProducts = () => {
  return (
    <section className="footer">
      <div className="footer__header">Kontakt</div>
      <ContactDetails />
    </section>
  );
};

export default MainProducts;

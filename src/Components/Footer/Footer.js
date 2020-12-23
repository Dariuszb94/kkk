import React, { Component } from "react";
import {FooterContainer,Contact} from "./FooterStyle";
import ContactDetails from "./FooterComponents/ContactDetails";


class MainProducts extends Component {

  render() {
    return (
      <FooterContainer>
        <Contact>Kontakt</Contact>
        <ContactDetails/>
      </FooterContainer>
      
    );
  }
}
export default MainProducts;
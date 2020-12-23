import React, { Component } from "react";
import {BrzmiContainer, BrzmiHeader, BrzmiButton} from "./BrzmiStyle";
import { StyledLink } from "./BrzmiStyle";


class Brzmi extends Component {

  render() {
    return (
      <BrzmiContainer>
        <BrzmiHeader>Brzmi interesująco?</BrzmiHeader>
        <StyledLink  to="/kontakt" >Skontaktuj się z nami!</StyledLink>
      </BrzmiContainer>
      
    );
  }
}
export default Brzmi;
import React, { Component } from "react";
import {Container, LogoImg, LogoLink, StyledLink} from "./LogoStyle";
import logo from "../../../../Assets/group-12-copy-5.svg"

class Logo extends Component {
  constructor(props) {
    super(props);

    this.scrollToTop = this.scrollToTop.bind(this);
  }
scrollToTop(){
  window.scrollTo(0, 0);
}
  render() {
    return (
      <Container>
        <StyledLink to="/" onClick={() => this.scrollToTop()}><LogoImg src={logo}/></StyledLink>
          
      </Container>
    );
  }
}
export default Logo;
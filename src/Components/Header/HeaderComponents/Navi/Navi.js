import React, { Component } from "react";
import {Container, Menu, MenuElement, StyledLink,StyledLinka} from "./NaviStyle";

class Logo extends Component {

  render() {
    return (
      <Container>
        <Menu>
        <MenuElement><StyledLink to="/map" activeClassName="active">Mapa czujników</StyledLink></MenuElement>
          <MenuElement><StyledLinka href="http://srodowiskowokolicy.pl/wykresyg.php" >Wykresy</StyledLinka></MenuElement>
          <MenuElement>Czujniki</MenuElement>
          <MenuElement><StyledLink to="/oNas" >O Nas</StyledLink></MenuElement>
          <MenuElement><StyledLink to="/kontakt" >Kontakt</StyledLink></MenuElement>
        </Menu>
      </Container>
    );
  }
}
export default Logo;
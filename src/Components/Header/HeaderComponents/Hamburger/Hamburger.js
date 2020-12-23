import React, { Component } from "react";
import HamburgerHide from "../../../../Assets/menu--open.svg";
import HamburgerClose from "../../../../Assets/menu--closed.svg";
import Logo from "../Logo/Logo";
import {
  HamburgerHideImg,
  MenuElement,
  StyledLink,
  StyledLinka,
  Menu,
  Overlay,
  Close,
} from "./HamburgerStyle";

class Hamburger extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shownMenu: false,
    };

    this.hideMenu = this.hideMenu.bind(this);
    this.showMenu = this.showMenu.bind(this);
  }
  showSettings(event) {
    event.preventDefault();
  }
  hideMenu() {
    document.querySelector(".bm-burger-button button").click();
    window.scrollTo(0, 0);
  }
  showMenu() {
    this.setState({ shownMenu: !this.state.shownMenu });
  }
  render() {
    return (
      <React.Fragment>
        <Logo />

        {!this.state.shownMenu ? (
          <HamburgerHideImg src={HamburgerHide} onClick={this.showMenu} />
        ) : null}
        {this.state.shownMenu ? (
          <Menu>
            <MenuElement>
              <StyledLink
                to="/map"
                activeClassName="active"
                onClick={this.showMenu}
              >
                Mapa czujników
              </StyledLink>
            </MenuElement>
            <MenuElement>
              <StyledLinka
                href="http://srodowiskowokolicy.pl/wykresyg.php"
                onClick={this.showMenu}
              >
                Wykresy
              </StyledLinka>
            </MenuElement>
            <MenuElement>
              <StyledLink to="/" onClick={this.showMenu}>
                Czujniki
              </StyledLink>
            </MenuElement>
            <MenuElement>
              <StyledLink to="/oNas" onClick={this.showMenu}>
                O Nas
              </StyledLink>
            </MenuElement>
            <MenuElement>
              <StyledLink to="/kontakt" onClick={this.showMenu}>
                Kontakt
              </StyledLink>
            </MenuElement>
          </Menu>
        ) : null}
        {this.state.shownMenu ? <Overlay /> : null}
        {this.state.shownMenu ? (
          <Close src={HamburgerClose} onClick={this.showMenu} />
        ) : null}
      </React.Fragment>
    );
  }
}
export default Hamburger;

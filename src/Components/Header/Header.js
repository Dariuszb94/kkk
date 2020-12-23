import React, { Component } from "react";
import Logo from "./HeaderComponents/Logo/Logo";
import Navi from "./HeaderComponents/Navi/Navi";
import Hamburger from "./HeaderComponents/Hamburger/Hamburger";
import {Container} from "./HeaderStyle";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile:false,
    };
    this.listenForResize = this.listenForResize.bind(this);
  }
  componentDidMount() {
    window.addEventListener("resize", this.listenForResize);
    this.listenForResize();
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.listenForResize);
}
  listenForResize(){
    if(window.innerWidth < 1000) {
      this.setState({ isMobile: true});
     // console.log("mobile");
    }
    else{
      this.setState({ isMobile: false});
     // console.log("Niemobile");
    }
  }
  render() {
    const isMobile= this.state.isMobile;
    return (
      <Container>
        {isMobile ?
          <Hamburger/>
          :
          <React.Fragment>
          <Logo/>
          <Navi/>
        </React.Fragment>}
      </Container>
    );
  }
}
export default Header;
import React, { Component } from "react";
import Brzmi from "./Brzmi/Brzmi";
import Banner from "./Banner/Banner";
import TextContainer from "./TextContainer/TextContainer";
import Footer from "../Footer/Footer";
class ONas extends Component {
  componentDidMount(){
    window.scrollTo(0, 0);
  }
  render() {
    return (<React.Fragment>
      
        <Banner />
        <TextContainer></TextContainer>
        <Brzmi />
        <Footer/>
      </React.Fragment>
    );
  }
}
export default ONas;

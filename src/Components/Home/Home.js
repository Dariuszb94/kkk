import React, { Component } from "react";
import Brzmi from "./Brzmi/Brzmi";
import MainProducts from "./MainProducts/MainProducts";
import Banner from "./Banner/Banner";
import Footer from "../Footer/Footer";
class Home extends Component {
  componentDidMount(){
    window.scrollTo(0, 0);
  }
  render() {
    return (<React.Fragment>

        <Banner />
        <MainProducts />
        <Brzmi />
        <Footer/>
      </React.Fragment>
    );
  }
}
export default Home;

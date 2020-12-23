import React, { Component } from "react";
import {Container, Header, Subheader, StyledLink,Separator,SubContainer} from "./BannerStyle";

class Banner extends Component {

  render() {
    return (
      <Container>
            <Separator/>
        <SubContainer>
          
          <Header>Czujniki na poziomie</Header>
          <Subheader>Oferujemy mierniki poziomu hałasu</Subheader>
          <StyledLink  to="/kontakt" >Skontaktuj się z nami!</StyledLink>
          </SubContainer>
      </Container>
    );
  }
}
export default Banner;
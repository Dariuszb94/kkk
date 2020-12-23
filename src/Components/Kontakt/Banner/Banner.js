import React, { Component } from "react";
import {Container, Header, Subheader, ContactButton,Separator,SubContainer} from "./BannerStyle";

class Banner extends Component {

  render() {
    return (
      <Container>
                            <Separator/>
        <SubContainer>
          <Header>Kontakt</Header>
          </SubContainer>
      </Container>
    );
  }
}
export default Banner;
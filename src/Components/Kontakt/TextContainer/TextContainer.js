import React, { Component } from "react";
import {
  Container,
  ContainerFirst,
  BigContainer,
  Header,
  Text,
  LogoImg,
  Icon,
  IconText,
  NameNumber,
  Name,
  Number,
  NameBiuro,
} from "./TextContainerStyle";
import Ikona from "../../../Assets/phone.svg";
import IkonaEnvelope from "../../../Assets/envelope.svg";
import IkonaLokalizacja from "../../../Assets/map-marker.svg";
class Banner extends Component {
  render() {
    return (
      <BigContainer>
        <ContainerFirst>
          <Container>
            <IconText>
              <Icon src={Ikona} />
              <Text>Telefon</Text>
            </IconText>
            <NameNumber>
              <Name>Wojciech Borecki</Name>
              <Number href="tel:601786159">601 786 159</Number>
            </NameNumber>
            <NameNumber>
              <Name>Mirosław Skorek</Name>
              <Number href="tel:601542606">601 542 606</Number>
            </NameNumber>
          </Container>
          <Container>
            <IconText>
              <Icon src={IkonaEnvelope} />
              <Text>E-mail</Text>
            </IconText>
            <NameNumber>
              <Name>Biuro</Name>
              <Number href="mailto:scomi@scomi.pl">scomi@scomi.pl</Number>
            </NameNumber>
          </Container>
          <Container>
            <IconText>
              <Icon src={IkonaLokalizacja} />
              <Text>Adres biura</Text>
            </IconText>
            <NameNumber>
              <NameBiuro>ul. Mennicza<br />50-057 Wrocław</NameBiuro>
            </NameNumber>
          </Container>
        </ContainerFirst>
      </BigContainer>
    );
  }
}
export default Banner;

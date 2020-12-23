import React, { Component } from "react";
import {Container, ContainerFirst, BigContainer, Header, Text, LogoImg} from "./TextContainerStyle";
import Logo from "../../../Assets/group-12-copy.svg"

class TextContainer extends Component {

  render() {
    return (
      <BigContainer>
      <ContainerFirst>
        <Header>Jesteśmy firmą stworzoną przez zespół inżynierów z kilkunastoletnim doświadczeniem</Header>
        <Text>w profesjonalnych pomiarach hałasu w środowisku. Wierzymy, że nasza wiedza i doświadczenie może być użyteczna także dla Ciebie i Twojego otoczenia oraz pozwoli Ci sprawdzić klimat akustyczny, który otacza Cię w domu czy pracy.</Text>
      <Text>W naszym zespole są inżynierowie z takich dziedzin jak automatyka i robotyka, inżynieria środowiska i jakości, osoby z doświadczeniem w obszarze pomiarów i metrologii. Pomiarów akredytowanych w oparciu standardy ISO (17025) posiadające doświadczenie zawodowe w firmach o globalnym zasięgu. Współpracujący z takimi organizacjami jak Polskie Towarzystwo Akustyczne, Polskie Centrum Akredytacji, GUM, CIOP.... Posiadającym uprawniania audytorskie w zakresie norm ochrony środowiska ISO 14001 i ochrony pracy ISO 45001, i wiele innych</Text>
      <LogoImg src={Logo}></LogoImg>
      </ContainerFirst>
      <Container>
        <Header>Wojciech Borecki</Header>
        <Text>Inżynier środowiska – członek Polskiego Towarzystwa Akustycznego autor kilkudziesięciu sesji pomiarowych hałasu w środowisku, analiz akustycznych i trójwymiarowych modeli rozprzestrzenia dźwięku kompleksów przemysłowych, osiedli mieszkaniowych, tras komunikacyjnych jak i pojedynczych urządzeń generujących hałas</Text>
      </Container>
      <Container>
        <Header>Mirosław Skorek</Header>
        <Text>Automatyk – robotyk, specjalista systemów pomiarowych, wieloletnie doświadczenie w pracy z czujnikami i oprogramowaniem.</Text>
      </Container>
      </BigContainer>
    );
  }
}
export default TextContainer;
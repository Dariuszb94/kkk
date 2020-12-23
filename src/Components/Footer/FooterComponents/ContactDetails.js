import React, { Component } from "react";
import {Container, Mail, Telefon, ContactMain,ContactContent,LogoImg, Link} from "./ContactDetailsStyle";
import logo from "../../../Assets/group-12-copy-5.svg"

class ContactDetails extends Component {

  render() {
    return (
      <Container>
            <Mail><ContactMain>adres e-mail</ContactMain><br /><ContactContent><Link href="mailto:scomi@scomi.pl">scomi@scomi.pl</Link></ContactContent></Mail>
            <Telefon><ContactMain>numer telefonu</ContactMain><br /><ContactContent>Mirosław Skorek - <Link href="tel:+48601542606">601 542 606</Link></ContactContent><br /><ContactContent>Wojciech Borecki - <Link href="tel:+48601786159">601 786 159</Link></ContactContent></Telefon>
            <LogoImg src={logo}/>
      </Container>
    );
  }
}
export default ContactDetails;
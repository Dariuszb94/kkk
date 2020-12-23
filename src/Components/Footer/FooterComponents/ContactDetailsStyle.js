import styled from "styled-components";

export const Container = styled.div`
    display:flex;
    flex-direction:row;
    @media (max-width: 520px) {
        flex-direction:column;
  }
`;

export const Mail = styled.div`
    width:25%;
    @media (max-width: 600px) {
    width:32%;
  }
  @media (max-width: 520px) {
    margin-top:32px;
    width:100%
  }
  
`;
export const Telefon = styled.div`
    width:59%;
    @media (max-width: 520px) {
    margin-top:32px;
    width:100%
  }
`;
export const ContactMain = styled.div`
    font-size: 18px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.78;
    letter-spacing: normal;
    color: #ffffff;
    @media (max-width: 700px) {
    font-size: 14px;
  }
`;
export const ContactContent= styled.div`
    font-size: 20px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.6;
    letter-spacing: normal;
    color: #ffffff;
    @media (max-width: 700px) {
    font-size: 16px;
  }
`;
export const LogoImg = styled.img`
    width:110px;
    height:32px;
    align-self:flex-end;
    justify-self:flex-end;
    @media (max-width: 520px) {
        align-self:flex-start;
    justify-self:flex-start;
    margin-top:32px;
  }
`;
export const Link = styled.a`
    text-decoration:none;
    color:inherit;

`;
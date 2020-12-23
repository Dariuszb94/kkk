import styled from "styled-components";


export const FooterContainer = styled.div`
    display:flex;
    flex-direction:column;
    background-color: #3f51b5;
    font-family: 'Exo 2', 'Calibri', sans-serif;
    padding-right:64px;
    padding-left:64px;
    padding-top:56px;
    padding-bottom:88px;
    @media (max-width: 1000px) {
    padding-right:36px;
    padding-left:36px;
    padding-top:40px;
    padding-bottom:48px;
  }
  @media (max-width: 800px) {
    padding-right:16px;
    padding-left:16px;
    padding-top:24px;
    padding-bottom:32px;
  }
`;

export const Contact = styled.div`
    font-size: 28px;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.14;
    letter-spacing: normal;
    color: #ffffff;
    margin-bottom:64px;
    @media (max-width: 800px) {
        margin-bottom:40px;
  }
  @media (max-width: 600px) {
        margin-bottom:32px;
  }
`;

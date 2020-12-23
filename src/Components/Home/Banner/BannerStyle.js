import styled from "styled-components";
import kropki from "../../../Assets/kropki-baner-kompresja.svg"
import { NavLink } from "react-router-dom";

export const Container = styled.div`
    display:flex;
    flex-direction:column;
  
    background-color:#3f51b5;

    font-family: 'Exo 2', 'Calibri', sans-serif;
 

`;
export const SubContainer = styled.div`

    background-image: url(${kropki});
    background-size:cover;
    background-color:#3f51b5;


`;
export const Header = styled.div`
    margin-top:152px;
    padding-left:176px;
    margin-bottom:8px;
    font-size: 64px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.25;
    letter-spacing: normal;
    color: #ffffff;
    @media (max-width: 800px) {
    font-size: 40px;
    margin-top:40px;
    padding-left:16px;
  }

`;
export const Subheader = styled.div`
    margin-bottom:48px;
    font-size: 32px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    padding-left:176px;
    line-height: 1.5;
    letter-spacing: normal;
    color: #ffffff;
    @media (max-width: 800px) {
    font-size: 16px;
  font-weight: 500;
  line-height:1.5;
  margin-bottom:56px;
  padding-left:16px;
    }
`;
export const Separator = styled.div`
height: 132px;
    @media (max-width: 800px) {
      height: 108px;
  }
`;
export const ContactButton = styled.button`
    padding-top:12px;
    border:0;
    padding-bottom:12px;
    width:304px;
    display:flex;
    font-size: 18px;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.33;
    letter-spacing: normal;
    text-align: center;
    color: #1f2961;
    align-items: center;
    justify-content: center;
    border-radius: 2px;
    background-color: #ffffff;
    margin-bottom:168px;
    font-family:inherit;
    @media (max-width: 800px) {
      margin-bottom:56px;
}

`;
export const StyledLink = styled(NavLink).attrs()`
  text-decoration: none;
  padding-top:12px;
  margin-left:176px;
    border:0;
    padding-bottom:12px;
    width:304px;
    display:flex;
    font-size: 18px;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.33;
    letter-spacing: normal;
    text-align: center;
    color: #1f2961;
    align-items: center;
    justify-content: center;
    border-radius: 2px;
    background-color: #ffffff;
    margin-bottom:168px;
    border:none;
    font-family:inherit;
    @media (max-width: 800px) {
      margin-left:0;
      margin:0 auto;
      margin-bottom: 56px;
      width: calc(100% - 32px);
}

   
`;
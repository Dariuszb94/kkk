import styled from "styled-components";
import kropki from "../../../Assets/tlo-1.svg"

export const Container = styled.div`
    display:flex;
    flex-direction:column;
    background-color:#3f51b5;

    font-family: 'Exo 2', 'Calibri', sans-serif;



`;
export const SubContainer = styled.div`
    background-size:cover;
    background-image: url(${kropki});
    background-color:#3f51b5;



`;
export const Header = styled.div`
    margin-top:172px;
    margin-bottom: 128px;
    font-size: 64px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.25;
    letter-spacing: normal;
    color: #ffffff;
    text-align:center;
    @media (max-width: 1000px) {
    font-size: 40px;
  }
  @media (max-width: 600px) {
    font-size: 36px;
  }
`;
export const Separator = styled.div`
height: 132px;
@media (max-width: 800px) {
      height: 108px;
  }
`;
export const Subheader = styled.div`
    margin-bottom:48px;
    font-size: 32px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: normal;
    color: #ffffff;
    @media (max-width: 600px) {
    font-size: 20px;
    margin-bottom:40px;
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
    @media (max-width: 1000px) {
        margin-bottom:124px;
  }
  @media (max-width: 600px) {
    margin-bottom:96px;
  }
`;

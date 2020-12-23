import styled, { keyframes } from 'styled-components'
import { NavLink } from "react-router-dom";
export const Search = styled.div`
    position: absolute;
    top: 156px;
    z-index: 450;
    left: 24px;
    width: 400px;
    background-color: white;
    color: white;
    border-radius: 2px;
    box-shadow: 0 -1px 0 0 rgba(0, 0, 0, 0.02), 0 2px 4px 0 rgba(0, 0, 0, 0.2);
    padding:0;
    margin: 8px 0;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    @media (max-width: 1000px) {
      width: 300px;
    }
    @media (max-width: 800px) {
      top: 124px;
      left: 0;
      margin-left: 8px;
      width: calc(100% - 16px);
    }
 
}
`;
export const Container = styled.div`
position:relative;
background-color:#3f51b5;

`;
export const ContainerDane = styled.div`
  background-color: #3f51b5;
  padding-top: 24px;
  padding-left: 24px;
  @media (max-width: 500px) {
      padding-left: 8px;
    }
    @media (max-width: 450px) {
      font-size:16px;
    }
`;
export const Dane = styled.div`
  color: white;
  font-size: 20px;
  color: #feffff;
  font-family: "Exo 2", "Calibri", sans-serif;
  z-index:600;
  @media (max-width: 450px) {
      font-size:16px;
    }
`;
export const Menu = styled.ul`
display: flex;
    position: absolute;
    top: 110px;
    z-index: 450;
    left:24px;
    @media (max-width: 800px) {
      top: 84px;
   left:8px;
 }

`;
export const MenuElement = styled.li`
     &:nth-child(2) a{
      color: #1f2961;
  border-radius: 2px;
  border: 2px solid #3f51b5 !important;
      }
`;
export const StyledLink = styled(NavLink).attrs()`
  width: 100%;
  padding:8px 16px 8px 16px;
  text-decoration: none;
  color:#1f2961;
  font-size: 16px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: normal;
  text-align: center;
  font-family: 'Exo 2','Calibri',sans-serif;
  border-radius: 2px;
    box-shadow: 0 8px 10px 1px rgba(0,0,0,0.14);
    background-color: white;
;
`;
export const DaneContent = styled.div`
  display:flex;
  @media (max-width: 600px) {
      flex-direction:column;
    }
`;
export const Dana = styled.div`
  height: 40px;
  @media (max-width: 450px) {
      font-size:16px;
    }
`;

export const DanePolowa = styled.div`

display:flex;
flex-direction:column;
margin-right:36px;
margin-bottom:24px;
&:nth-child(1) a{

margin-right:0;
}

@media (max-width: 800px) {
  margin-right:0;
  margin-bottom: 48px;
  min-width:160px;
    }

`;
export const Wykres = styled.img`

max-width: 900px;
    height: auto;
    width: 100%;
`;
export const WykresContainer = styled.div`
background-color: #3f51b5;
padding:24px;
`;
export const DaneFlex = styled.div`
  @media (max-width: 800px) {
    display:flex;
flex-direction:row;
justify-content: space-between;
    }

`;
export const DropDownList = styled.ul`
cursor:pointer;
`;
export const ListElement = styled.li`
display:none;
cursor:pointer;
font-family: "Exo 2","Calibri",sans-serif;
padding: 12px 10px;
color:white;
&:nth-child(odd){
background-color:white;
color:#1f2961;
  }

`;
export const DropDownUp = styled.div`
cursor:pointer;
border: 1px solid #3f51b5;
padding: 8px 16px;
    font-family: "Exo 2","Calibri",sans-serif;
    color:white;
    border-radius: 5px;
    display: flex;
    @media (max-width: 800px) {
      padding: 8px;
      display: flex;
    justify-content: flex-end;
  }
  }
`;
export const DropDownContainer = styled.div`
  cursor: pointer;

  background: #3f51b5;
  margin-left: 24px;
  border-radius: 2px;
  position: absolute;
  top: 102px;
    z-index: 450;
    left: 228px;
    background-color: #3f51b5;
    @media (max-width: 800px) {
      top: 76px;
    right: 8px;

    left: initial;
  }
`;
export const Details = styled.div`
cursor:pointer;
font-weight: 600;
`;
const popupAnimation = keyframes`
 0% { left: -200px; opacity:0 }
 100% { left: 24px;  opacity:1  }
 
`;
const popupAnimationMobile = keyframes`
 0% { bottom: 40px; opacity:0 }
 100% { bottom: 0;  opacity:1  }

`;
export const PopupDane = styled.div`
  display: block;
  background-color: white;
  position: absolute;
  top: 228px;
  z-index: 400;
  left: 24px;
  padding: 16px 12px 24px 16px;
  width: 400px;
  @media (min-width: 800px) {
  animation-name: ${popupAnimation};
  }
  animation-duration: 2s;
  animation-iteration-count: 1;
  @media (max-width: 800px) {
  animation-name: ${popupAnimationMobile};
left:0;
top:initial;
bottom:0;
width: 100%;
z-index: 450;

border-top-left-radius:12px;
border-top-right-radius:12px;

  }
`;
export const DaneMiejsce = styled.div`
  font-family: "Exo 2", "Calibri", sans-serif;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.5;
  color: #3f51b5;
  padding-bottom: 8px;
  border-bottom: 1px solid #c9cee6;
  margin-bottom: 12px;
  @media (max-width: 800px) {
    font-size: 12px;
  }

`;
export const Skala = styled.img`
    height: auto;
    width: 216px;
    position: absolute;
    bottom: 22px;
    z-index: 450;
    left: 24px;
    @media (max-width: 800px) {
    width: auto;
    left: 8px;
  }
`;
export const DaneValue = styled.div`
  font-family: "Exo 2", "Calibri", sans-serif;
  font-size: 16px;

  line-height: 1.5;
  color: #1f2961;
  @media (max-width: 800px) {
    font-size: 12px;
  }
`;
export const DaneKey = styled.div`
  font-family: "Exo 2", "Calibri", sans-serif;
  font-size: 16px;
  font-weight: 300;
  line-height: 1.5;
  color: #1f2961;
  @media (max-width: 800px) {
    font-size: 12px;
  }
`;
export const DaneKeyUp = styled.div`
  font-family: "Exo 2", "Calibri", sans-serif;
  font-size: 16px;
  font-weight: 300;
  line-height: 1.5;
  color: #1f2961;
  margin-bottom:8px;
  @media (max-width: 800px) {
    font-size: 12px;
  }
`;
export const DaneDetails = styled.div`
  margin-bottom: 8px;
`;

export const ClosePopup = styled.img`
  height: auto;
  position: absolute;
  top: 12px;
  right: 12px;
  cursor: pointer;
`;
export const Angle = styled.img`
  width: 24px;
  height: auto;
`;
export const SearchFlex = styled.div`
  display:flex;
  justify-content: space-between;
    padding-right: 16px;
`;
export const SearchLupa = styled.img`
  height: auto;
`;
export const WykresLink = styled.a`
  font-family: "Exo 2", "Calibri", sans-serif;
  font-size: 16px;
  cursor: pointer;
  line-height: 1.5;
  text-align: right;
  color: #1f2961;
  position: absolute;
  bottom: 24px;
  right: 12px;
  @media (max-width: 800px) {
    font-size: 12px;
  }
`;

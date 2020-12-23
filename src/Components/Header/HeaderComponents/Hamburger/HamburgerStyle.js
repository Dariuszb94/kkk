import styled, { keyframes } from "styled-components";
import { NavLink } from "react-router-dom";

export const HamburgerHideImg = styled.img`
  width: 20px;
  height: auto;
  cursor: pointer;
  margin-right: 16px;
`;
export const Close = styled.img`
  width: 20px;
  height: auto;
  z-index: 50;
  cursor: pointer;
  margin-right: 16px;
`;

export const HamburgerMenuElement = styled(NavLink).attrs()`
  font-family: "Exo 2", "Calibri", sans-serif;
  font-size: 24px;
  font-weight: 700;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: normal;
  color: #ffffff;
  text-decoration: none;
  text-decoration: none;
`;
export const StyledLinka = styled.a`
  font-family: "Exo 2", "Calibri", sans-serif;
  font-size: 18px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: normal;
  color: #ffffff;
  text-decoration: none;
  text-decoration: none;
`;

export const MenuElement = styled.li`
  font-family: "Exo 2", "Calibri", sans-serif;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.78;
  letter-spacing: normal;
  color: #ffffff;
  margin-left: 32px;
  font-size: 18px;
  margin-bottom: 40px;
`;
export const StyledLink = styled(NavLink).attrs()`
  width: 100%;
  text-decoration: none;
  color: white;
`;
const popupAnimation = keyframes`
 0% { left: -200px}
 100% { left: 0  }
 
`;
export const Menu = styled.ul`
  display: flex;
  flex-direction: column;
  margin-right: 64px;
  position: absolute;
  top: 120px;
  margin-right: 0;
  justify-content: center;
  align-items: center;
  width: 100%;
  animation-name: ${popupAnimation};
  animation-duration: 1.5s;
  animation-iteration-count: 1;
  z-index: 50;
`;

export const Overlay = styled.div`
  position: fixed;
  padding: 0;
  margin: 0;

  top: 0;
  left: 0;

  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
`;

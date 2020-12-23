import styled from "styled-components";
import { NavLink } from "react-router-dom";
export const Container = styled.div`
    color:white;
`;
export const Menu = styled.ul`
    display:flex;
    flex-direction:row;
    margin-right: 64px;
`;
export const MenuElement = styled.li`
  font-family: 'Exo 2', 'Calibri', sans-serif;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.78;
  letter-spacing: normal;
  color: #ffffff;
  margin-left:32px;
  font-size: 18px;
`;
export const StyledLink = styled(NavLink).attrs()`
  width: 100%;
  text-decoration: none;
  color: white;
`;
export const StyledLinka = styled.a`
  width: 100%;
  text-decoration: none;
  color: white;
`;

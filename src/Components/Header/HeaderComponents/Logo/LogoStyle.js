import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
`;
export const LogoImg = styled.img`
    width:110px;
    height:32px;
    margin-left: 64px;
    @media (max-width: 800px) {
      width: auto;
    height: 24px;
    margin-left: 16px;
  }


`;
export const LogoLink = styled.a`

`;
export const StyledLink = styled(NavLink).attrs()`
  text-decoration: none;
  color: white;
`;


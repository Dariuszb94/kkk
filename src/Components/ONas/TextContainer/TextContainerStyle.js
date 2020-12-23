import styled from "styled-components";
export const BigContainer = styled.div`
    background-color:#f6f6f6;
    display: flex;
    flex-direction:column;
    align-items: center;
    padding-top:54px;
    padding-bottom:112px;
    padding-right:16px;
    padding-left:16px;
    @media (max-width: 1000px) {
        padding-top:8px;
  }
    
`;
export const ContainerFirst = styled.div`
    display:flex;
    flex-direction:column;
    max-width:640px;
    font-family: 'Exo 2', 'Calibri', sans-serif;
border-bottom:1px solid #e2e2e2;
`;
export const Container = styled.div`
    display:flex;
    flex-direction:column;
    max-width:640px;
    font-family: 'Exo 2', 'Calibri', sans-serif;
`;
export const Header = styled.div`
    font-family: 'Exo 2', 'Calibri', sans-serif;
font-size: 28px;
font-weight: 600;
line-height: 1.43;
color: #3f51b5;
margin-bottom:32px;
margin-top:64px;
@media (max-width: 1000px) {
    font-size: 24px;
  }
    

`;
export const Text = styled.div`
  font-size: 18px;
  font-family: 'Exo 2', 'Calibri', sans-serif;
  line-height: 1.78;
  color: #1f2961;
  margin-bottom:32px;

`;

export const LogoImg = styled.img`
    width:110px;
    height:32px;
    align-self: flex-end;
    margin-top:32px;
    margin-bottom:64px;
`;
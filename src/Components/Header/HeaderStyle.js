import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction:row;
  padding-top:24px;
  padding-bottom:24px;
  background-color:#3f51b5;
  justify-content: space-between;
  position:fixed;
  width:100%;
  z-index:500;
  @media (max-width: 800px) {
    padding-top: 16px;
    padding-bottom: 16px;
  }
`;

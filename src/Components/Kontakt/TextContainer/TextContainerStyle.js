import styled from "styled-components";
export const BigContainer = styled.div`
  background-color: #f6f6f6;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 144px;
  padding-bottom: 144px;
  @media (max-width: 1000px) {
    padding-top: 72px;
  padding-bottom: 72px;
  }
`;
export const ContainerFirst = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 864px;
  font-family: "Exo 2", "Calibri", sans-serif;
  width: 100%;
  justify-content: space-between;
  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 1000px) {
margin-bottom:32px;
margin-top:32px;
  }
`;
export const IconText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const NameNumber = styled.div`
  display: flex;
  flex-direction: column;
  margin-top:32px;
`;

export const Name = styled.div`
  font-family: "Exo 2", "Calibri", sans-serif;
  font-size: 18px;
  font-weight: 500;
  line-height: 2.22;
  text-align: center;
  color: #1f2961;
`;

export const Icon = styled.img`
  width: 64px;
  height: 64px;
  margin-bottom:24px;
`;

export const Text = styled.div`
  font-family: "Exo 2", "Calibri", sans-serif;
  font-size: 18px;
  font-weight: 300;
  line-height: 1.78;
  text-align: center;
  color: #1f2961;
`;

export const Number = styled.a`
  text-decoration: none;
  color: inherit;
  font-family: "Exo 2", "Calibri", sans-serif;
  font-size: 18px;
  font-weight: bold;
  line-height: 2.22;
  text-align: center;
  color: #3f51b5;
`;
export const NameBiuro = styled.div`

  font-family: "Exo 2", "Calibri", sans-serif;
  font-size: 18px;
  font-weight: bold;
  line-height: 2.22;
  text-align: center;
  color: #3f51b5;
`;
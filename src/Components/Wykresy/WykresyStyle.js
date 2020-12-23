import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  top: 104px;
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 1000px) {
    top: 98px;
    flex-direction: column;
  }
`;

export const DateText = styled.div`
  font-weight: 300;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height, or 150% */
  align-self: flex-start;
  margin-bottom: 8px;

  color: #1f2961;
  font-family: "Exo 2", "Calibri", sans-serif;
  @media (max-width: 1000px) {
    font-weight: 300;
    font-size: 14px;
    line-height: 24px;
    margin-bottom: 4px;
  }
`;

export const DateContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 40px;
  background: white;
  &:nth-child(2) {
    margin-left: 24px;
  }
  @media (max-width: 1000px) {
    margin-left: 16px;
    &:nth-child(2) {
      margin-left: 24px;
    }
  }
`;
export const DatesContainer = styled.div`
  display: flex;
`;
export const GenerujWykres = styled.button`
  background: gray;
  box-shadow: 0px 8px 10px 1px rgba(0, 0, 0, 0.14);
  border-radius: 2px;
  width: 141px;
  height: 40px;
  border: none;
  font-weight: 500;
  pointer-events: none;
  font-size: 16px;
  line-height: 24px;
  margin-left: 24px;
  /* identical to box height, or 150% */
  position: relative;
  cursor: pointer;
  top: 32px;

  text-align: center;

  color: #ffffff;
  @media (max-width: 1000px) {
    height: 32px;
    width: 120px;
    margin: 0 auto;
    top: 2px;
    margin-bottom: 18px;
    font-size: 14px;
  }
`;
export const Calendar = styled.img`
  height: 22px;
  width: 20px;
  right: 50px;
  top: -30px;
  position: relative;
  @media (max-width: 1000px) {
    top: -27px;
  }
`;

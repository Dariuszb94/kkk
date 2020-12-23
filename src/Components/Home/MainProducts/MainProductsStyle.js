import styled from "styled-components";
import kropki from "../../../Assets/t-o-3.svg";
import kropki2 from "../../../Assets/tlo-2.svg";
export const ContainerProduct = styled.div`
  display: flex;
  flex-direction: row;
  font-family: "Exo 2", "Calibri", sans-serif;
  background-color: #f6f6f6;
  @media (max-width: 800px) {
    flex-direction: column-reverse;
  }
`;
export const ContainerProductRev = styled.div`
  display: flex;
  flex-direction: row;
  font-family: "Exo 2", "Calibri", sans-serif;
  background-color: #f2f3f5;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;
export const ProductImage = styled.img`
  width: 50%;
  @media (max-width: 800px) {
    width: 100%;
  }
`;
export const ProductDescription1 = styled.div`
  width: 50%;
  padding-bottom: 40px;
  padding-top: 64px;
  @media (max-width: 1280px) {
    padding-bottom: 24px;
    padding-top: 40px;
  }
  @media (max-width: 800px) {
    padding-bottom: 32px;
    padding-top: 32px;
    width: 100%;
  }
`;
export const ProductDescription2 = styled.div`
  width: 50%;
  padding-bottom: 40px;
  padding-top: 64px;
  background-image: url(${kropki2});
  background-repeat: no-repeat;
  @media (max-width: 1280px) {
    padding-bottom: 24px;
    padding-top: 40px;
  }

  @media (max-width: 800px) {
    padding-bottom: 32px;
    background-image: none;
    padding-top: 32px;
    width: 100%;
  }
`;
export const ProductDescription3 = styled.div`
  width: 50%;
  padding-bottom: 40px;
  padding-top: 64px;
  background-image: url(${kropki});
  background-repeat: no-repeat;
  @media (max-width: 1280px) {
    padding-bottom: 24px;
    padding-top: 40px;
  }
  @media (max-width: 800px) {
    padding-bottom: 32px;
    background-image: none;
    padding-top: 32px;
    width: 100%;
  }
`;
export const ProductDescription4 = styled.div`
  width: 50%;
  padding-bottom: 40px;
  padding-top: 64px;

  @media (max-width: 1280px) {
    padding-bottom: 24px;
    padding-top: 40px;
  }
  @media (max-width: 800px) {
    padding-bottom: 32px;
    padding-top: 32px;
    width: 100%;
  }
`;
export const ProductHeader = styled.h2`
  font-size: 30px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: normal;
  color: #3f51b5;
  margin-bottom: 32px;
  padding-left: 48px;
  padding-right: 176px;
  @media (max-width: 1280px) {
    font-size: 26px;
    margin-bottom: 24px;
    padding-left: 32px;
    padding-right: 144px;
  }
  @media (max-width: 1080px) {
    font-size: 20px;
    margin-bottom: 24px;
    padding-left: 32px;
    padding-right: 80px;
  }
  @media (max-width: 800px) {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 16px;
    padding-left: 16px;
    padding-right: 16px;
    line-height: 1.78;
  }
`;
export const ProductContent = styled.p`
  padding-left: 48px;
  font-size: 18px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.78;
  letter-spacing: normal;
  color: #1f2961;
  padding-right: 176px;
  @media (max-width: 1280px) {
    font-size: 16px;
    padding-left: 32px;
    padding-right: 144px;
  }
  @media (max-width: 1080px) {
    font-size: 14px;
    padding-left: 32px;
    padding-right: 80px;
  }
  @media (max-width: 800px) {
    padding-left: 16px;
    padding-right: 16px;
    font-size: 16px;

    line-height: 2;
  }
`;
export const ProductHeaderRev = styled.h2`
  font-size: 30px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: normal;
  color: #3f51b5;
  margin-bottom: 32px;
  padding-left: 176px;
  padding-right: 48px;
  @media (max-width: 1280px) {
    font-size: 26px;
    margin-bottom: 24px;
    padding-left: 144px;
    padding-right: 32px;
  }
  @media (max-width: 1080px) {
    font-size: 20px;
    margin-bottom: 24px;
    padding-left: 80px;
    padding-right: 32px;
  }
  @media (max-width: 800px) {
    padding-left: 16px;
    padding-right: 16px;
    font-weight: 600;
    margin-bottom: 16px;

    line-height: 1.78;
  }
`;
export const ProductContentRev = styled.p`
  padding-left: 176px;
  font-size: 18px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.78;
  letter-spacing: normal;
  color: #1f2961;
  padding-right: 48px;
  @media (max-width: 1280px) {
    font-size: 16px;
    padding-left: 144px;
    padding-right: 32px;
  }
  @media (max-width: 1080px) {
    font-size: 14px;
    padding-left: 80px;
    padding-right: 32px;
  }
  @media (max-width: 860px) {
    font-size: 16px;
    padding-left: 16px;
    padding-right: 16px;
    line-height: 2;
  }
`;

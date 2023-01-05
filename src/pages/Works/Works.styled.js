import styled from "styled-components";

export const Container = styled.div`
  padding: 0px;
  margin: 0px;
  box-sizing: border-box;
  min-height: 100vh;
  padding: 57px 68px;
  @media (max-width: 1024px) {
    padding: 28px 17px;
  }
`;

export const Main = styled.div`
  margin-top: 153px;

  .header {
    font-weight: 700;
    font-size: 48px;
    line-height: 58px;
    background: linear-gradient(180deg, #ffffff 0%, #408cff 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    padding-bottom: 22px;
    @media (max-width: 1024px) {
      font-size: 40px;
    }
    @media (max-width: 768px) {
      font-size: 20px;
      line-height: 24px;
      padding-bottom: 12px;
    }
    @media (max-width: 480px) {
      font-size: 20px;
      line-height: 24px;
      padding-bottom: 7px;
    }
  }
  .subHeader {
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    color: #ffffff;
    padding-bottom: 31px;
    margin-bottom: 55px;
    border-bottom: 0.5px solid #ffffff;

    @media (max-width: 768px) {
      font-size: 18px;
      line-height: 24px;
    }
    @media (max-width: 480px) {
      font-size: 12px;
      line-height: 15px;
      padding-bottom: 17px;
      margin-bottom: 36px;
    }
  }
  @media (max-width: 768px) {
    width: 95%;
    margin: 0px auto;
    margin-top: 66px;
  }
`;

export const SubMain = styled.div`
  margin-top: 142px;

  h3 {
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    color: #ffffff;
    padding-bottom: 31px;
    margin-bottom: 55px;
    border-bottom: 0.5px solid #ffffff;

    @media (max-width: 768px) {
      font-size: 18px;
      line-height: 24px;
    }
    @media (max-width: 480px) {
      font-size: 12px;
      line-height: 15px;
      padding-bottom: 17px;
      margin-bottom: 36px;
    }
  }
  @media (max-width: 768px) {
    margin-bottom: 50px;
    margin-top: 100px;
  }
`;

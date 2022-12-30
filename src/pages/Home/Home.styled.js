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

export const Organizations = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 151px;
  h2 {
    width: 77%;
    margin-bottom: 0px;
    padding-bottom: 30px;
    font-weight: 800;
    font-size: 48px;
    line-height: 58px;
    color: #ffffff;
    .desktopSpan {
      color: #408cff;
    }
  }
  p {
    font-weight: 400;
    font-size: 16px;
    line-height: 23px;
    color: #ffffff;
  }

  @media (max-width: 768px) {
    margin-top: 42px;
    h2 {
      width: 40%;
      font-size: 20px;
      line-height: 30px;
      padding-bottom: 14px;

      .mobileSpan {
        color: #408cff;
      }
    }
    p {
      font-size: 11px;
      line-height: 23px;
    }
  }

  @media (max-width: 480px) {
    h2 {
      width: 100%;
    }
  }
  /* @media (min-width: 481px) {
    h2 {
      width: 60%;
    }
  } */
`;

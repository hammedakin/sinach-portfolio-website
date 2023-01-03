import styled from "styled-components";

export const Container = styled.div`
  padding: 0px;
  margin: 0px;
  box-sizing: border-box;
  min-height: 100vh;
  padding: 57px 68px;
  h2 {
    font-weight: 800;
    font-size: 48px;
    margin-bottom: 20px;
    line-height: 58px;
    background: linear-gradient(180deg, #ffffff 0%, #408cff 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    @media (max-width: 1024px) {
      font-size: 40px;
    }
    @media (max-width: 768px) {
      font-size: 20px;
      line-height: 24px;
    }
    @media (max-width: 480px) {
      font-size: 20px;
      line-height: 24px;
    }
  }
  p {
    font-weight: 400;
    margin-bottom: 40px;
    font-size: 16px;
    line-height: 25px;
    color: #ffffff;
    @media (max-width: 480px) {
      font-size: 11px;
      margin-bottom: 24px;
    }
  }

  @media (max-width: 1024px) {
    padding: 28px 17px;
  }
`;

export const Organizations = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 53px;
  h2 {
    width: 77%;
    margin-bottom: 0px;
    padding-bottom: 30px;
  }
  @media (max-width: 1024px) {
    h2 {
      width: 80%;
    }
  }

  @media (max-width: 768px) {
    margin-top: 42px;
    h2 {
      width: 40%;
      padding-bottom: 14px;

      .mobileSpan {
        color: #408cff;
      }
    }
  }

  @media (max-width: 480px) {
    width: 95%;
    margin: 0px auto;
    h2 {
      width: 100%;
    }
  }
`;

export const Banner = styled.div`
  max-width: 100%;
  display: grid;
  grid-template-columns: 51% 45%;
  padding: 69px 0px;
  gap: 40px;

  .bannerContent {
    display: flex;
    flex-direction: column;
    justify-content: center;
    .intro {
      margin-bottom: 0px;
    }
    p {
      width: 92%;
      @media (max-width: 480px) {
        width: 100%;
      }
    }
    h1 {
      font-weight: 600;
      font-size: 57px;
      line-height: 73px;

      .first {
        color: #80839c;
      }
      .second {
        color: #ffffff;
      }
      .third {
        color: #086bff;
      }
      @media (max-width: 1024px) {
        font-size: 35px;
        line-height: 46px;
      }
      @media (max-width: 480px) {
        margin: 0px;
        padding-bottom: 16px;
        font-size: 30px;
        line-height: 38px;
      }
    }
    div {
      display: flex;
      align-items: flex-start;
      max-width: 95%;
      justify-content: space-between;
      button {
        border: none;
        outline: none;
        padding: 14px 47px;
        background: #086bff;
        color: #ffffff;
        border-radius: 5px;
        box-shadow: 2px 2px 0 2px #ffffff;
        a {
          color: #ffffff;
          margin-right: 5px;
          @media (max-width: 480px) {
            font-size: 11px;
          }
        }
      }
      @media (max-width: 1024px) {
        img {
          display: none;
        }
        button {
          margin-top: 18px;
          padding: 12px 37px;
        }
      }
    }
  }

  .bannerImg {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    img {
      width: 95%;
      @media (max-width: 1024px) {
        width: 100%;
      }
    }
    a {
      color: #ffffff;
      margin-top: 29px;
      text-decoration: underline;
      @media (max-width: 1024px) {
        margin-top: 20px;
      }
      @media (max-width: 480px) {
        margin-top: 0px;
        margin-bottom: 22px;
        font-size: 11px;
      }
    }
    @media (max-width: 480px) {
      flex-direction: column-reverse;
      margin-bottom: 63px;
    }
  }

  @media (max-width: 1024px) {
    gap: 20px;
  }
  @media (max-width: 480px) {
    display: flex;
    flex-direction: column-reverse;
    width: 95%;
    margin: 0px auto;
    padding: 59px 0px;
  }
`;

export const DesignProcess = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 80px;

  p {
    .arr {
      background: #086bff;
      border-radius: 1px;
      padding: 2px;
    }
  }
  @media (max-width: 480px) {
    width: 95%;
    margin: 0px auto;
    margin-bottom: 42px;
  }
`;

export const MyWorks = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 480px) {
    width: 95%;
    margin: 0px auto;
  }
`;

export const SubContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 480px) {
    flex-direction: column-reverse;
  }
`;

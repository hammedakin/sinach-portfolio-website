import styled from "styled-components";
import header_bg from "../../assets/about/about_bg.svg";

export const StyledAbout = styled.main`
  hr {
    border: 0.5px solid #ffffff;
  }
  .about-body {
    p,li {
      font-weight: 400;
      font-size: 16px;
      line-height: 30px;
    }
    background: linear-gradient(
      180deg,
      #ffffff 0%,
      rgba(191, 217, 255, 0.9) 53.12%,
      #bfd9ff 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  @media (max-width: 480px) {
    .about-body {
      font-size: 11px;
      line-height: 21px;
    }
  }
`;

export const AboutHeader = styled.div`
  background: url(${header_bg}) no-repeat;
  margin: 3rem 0;
  background-size: cover;
  color: #ffffff !important;
  max-height: 70vh;
  height: 65vh;
  max-height: 55vh;
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    font-weight: 700;
    font-size: 86px;
    line-height: 116px;
  }
  p {
    font-weight: 500;
    font-size: 32px;
    line-height: 39px;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 227px;
    background: linear-gradient(
      180deg,
      #00cc95 0%,
      #0051ca 94.27%,
      #7b00db 99.99%
    );
    border-radius: 10px;

    h1 {
      font-size: 32px;
      line-height: 39px;
    }
    p {
      font-size: 20px;
      line-height: 24px;
    }
  }
`;

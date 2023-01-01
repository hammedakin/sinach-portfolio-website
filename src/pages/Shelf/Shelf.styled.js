import styled from "styled-components";

export const StyledShelf = styled.main`
  color: #ffffff;
  h1 {
    font-weight: 700;
    font-size: 48px;
    line-height: 58px;
    background: linear-gradient(180deg, #ffffff 0%, #408cff 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  p {
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
  }
  hr {
    border: 0.5px solid #ffffff;
  }

  @media (max-width: 480px) {
    h1 {
      font-size: 20px;
      line-height: 24px;
    }
    p {
      font-size: 11px;
      line-height: 13px;
    }
  }
`;

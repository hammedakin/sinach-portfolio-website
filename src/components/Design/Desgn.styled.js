import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  flex-shrink: 0;
  gap: 125px;
  div {
    width: 100%;
    h3 {
      font-weight: 600;
      font-size: 28px;
      line-height: 34px;
      color: #ffffff;
      margin-bottom: 39px;
      @media (max-width: 480px) {
        font-size: 18px;
        line-height: 19px;
      }
    }
    li {
      list-style-type: none;
      width: fit-content;
      padding: 22px 10px;
      margin-bottom: 30px;
      font-weight: 600;
      font-size: 15.5px;
      line-height: 19px;
      color: #ffffff;
      border-radius: 5px;
      white-space: nowrap;
      @media (max-width: 480px) {
        font-size: 11px;
        line-height: 13px;
      }
    }
  }
  .blue li {
    background: rgba(8, 107, 255, 0.2);
    border-left: 6px solid #086bff;
  }

  .green li {
    background: rgba(0, 204, 117, 0.2);
    border-left: 6px solid #00cc75;
  }

  .purple li {
    background: rgba(143, 0, 255, 0.2);
    border-left: 6px solid #8f00ff;
  }
  @media (max-width: 1200px) {
    flex-wrap: nowrap;
    flex-shrink: 0;
    overflow-x: scroll;
    &::-webkit-scrollbar {
      display: hidden;
    }
  }
  @media (max-width: 1024px) {
    gap: 40px;
  }
  @media (max-width: 480px) {
    gap: 40px;
  }
`;

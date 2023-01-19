import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 49% 49%;
  gap: 30.28px;

  .content {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    gap: 45px;

    a {
      font-weight: 700;
      font-size: 20px;
      line-height: 24px;
      color: #ffffff;
      margin-bottom: 68px;
      @media (max-width: 768px) {
        font-size: 12px;
        line-height: 15px;
        margin-bottom: 20px;
      }
    }
    @media (max-width: 768px) {
      width: 322px;
      gap: 30.8px;
    }
  }
  @media (max-width: 768px) {
    display: flex;
    overflow-x: scroll;
    &::-webkit-scrollbar {
      display: none;
    }
    &::-webkit-scrollbar-track {
      display: none;
    }
    &::-webkit-scrollbar-thumb {
      display: none;
    }
  }
`;

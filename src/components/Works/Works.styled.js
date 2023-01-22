import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 50% 45%;
  width: 100%;
  padding: 22px;
  gap: 50px;
  margin-bottom: 80px;
  background: linear-gradient(
    180deg,
    rgba(8, 107, 255, 0.1) 0%,
    rgba(85, 153, 255, 0.1) 100%
  );
  border: 1px solid #bfd9ff;
  border-radius: 20px;

  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 40px;

    h3 {
      font-weight: 800;
      font-size: 40px;
      line-height: 55px;
      color: #ffffff;
      @media (max-width: 480px) {
        font-size: 23px;
        line-height: 32px;
      }
    }
    p {
      font-weight: 400;
      font-size: 16px;
      line-height: 23px;
      color: #ffffff;
      @media (max-width: 480px) {
        font-size: 16px;
        line-height: 23px;
      }
    }

    @media (max-width: 1000px) {
      padding-left: 20px;
    }
    @media (max-width: 768px) {
      padding-left: 0px;
    }
    @media (max-width: 480px) {
      padding: 15px;
      padding-bottom: 30px;
    }
  }
  .image {
    display: flex;
    img {
      max-width: 100%;
      border-radius: 15px;
    }
  }

  @media (max-width: 768px) {
    display: flex;
    width: 80%;
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    margin-bottom: 42px;
  }
  @media (max-width: 480px) {
    width: 100%;
    padding: 10px;
    gap: 22px;
  }
`;

export const Tab = styled.div`
  width: fit-content;
  display: flex;
  margin-bottom: 55px;

  button {
    border: none;
    border-bottom: 2px solid #75acff;
    outline: none;
    padding: 20px;
    background: transparent;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    color: #ffffff;
    &.active {
      color: #086bff;
      border-bottom: 2px solid #086bff;
    }

    @media (max-width: 768px) {
      font-size: 12px;
      line-height: 13px;
    }
  }
`;

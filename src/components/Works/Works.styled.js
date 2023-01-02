import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 50% 45%;
  width: 100%;
  padding: 22px;
  gap: 50px;
  border: 2px solid #ffffff;
  margin-bottom: 80px;
  background: linear-gradient(
    180deg,
    rgba(8, 107, 255, 0.1) 0%,
    rgba(85, 153, 255, 0.1) 100%
  );
  border-radius: 20px;

  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 40px;
    /* align-items: center; */
    h2 {
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
        font-size: 11px;
        line-height: 23px;
      }
    }
    button {
      border: none;
      outline: none;
      width: 60%;
      padding: 14px 47px;
      background: #086bff;
      color: #ffffff;
      border-radius: 5px;
      box-shadow: 2px 2px 0 2px #ffffff;
      a {
        color: #ffffff;
        margin-right: 5px;
      }
      @media (max-width: 1000px) {
        width: 80%;
      }
      @media (max-width: 768px) {
        width: 40%;
      }
      @media (max-width: 480px) {
        padding: 14px 27px;
        width: 100%;
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
    }
  }
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
  }
  @media (max-width: 480px) {
    padding: 10px;
  }
`;

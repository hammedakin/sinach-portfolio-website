import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
export const FooterCont = styled.div`
  width: 95%;
  height: 488.61px;
  background: #70a9ff;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 131px auto 79.91px auto;

  footer {
    width: 97%;
    height: 449.8px;
    border-radius: 20px;
    padding: 57px;
    background: #086bff;
    display: grid;
    grid-template-columns: 60% 40%;
    align-items: center;

    div {
      width: 100%;
      margin: 0px auto;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    @media (max-width: 768px) {
      /* width: 100%; */
      border-radius: 5px;
      display: flex;
      flex-direction: column;
      height: 268.15px;
      padding: 27px 22px 0px 22px;
    }
    @media (max-width: 481px) {
      height: auto;
    }
  }

  h2 {
    font-weight: 600;
    font-size: 40px;
    line-height: 48px;
    color: #ffffff;
    @media (max-width: 768px) {
      font-size: 20px;
      line-height: 24px;
    }
  }
  .cont {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 0px;
    margin-top: 20px;
    font-size: 30px;
    line-height: 38px;
    font-weight: 500;
    color: #ffffff;

    p {
      text-decoration: underline;
      margin-bottom: 0px;
      margin-right: 5px;
    }
    span {
      margin-right: 5px;
      text-decoration: none;
      text-decoration: line-through;
      color: #5599ff;
    }
    @media (max-width: 768px) {
      font-size: 20px;
      line-height: 24px;
      span {
        color: #a8a8a8;
      }
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 284px;
    border-radius: 5px;
    margin: 30px auto;
  }
  @media (max-width: 481px) {
    height: auto;
    padding: 10px 0px;
  }
`;

export const Img = styled.div`
  display: flex;
  min-width: 100%;
  height: 100%;
  img {
    width: 100%;
    align-self: flex-end;
  }
  .res {
    display: none;
  }
  @media (max-width: 768px) {
    img {
      width: auto;
    }
    .des {
      display: none;
    }
    .res {
      display: flex;
    }
  }
`;

export const Socials = styled.div`
  display: flex;
  gap: 47px;
  padding-top: 41px;
  border-top: 2px solid #80839c;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    color: #ffffff;
  }
  @media (max-width: 768px) {
    padding-top: 20px;
    gap: 21px;
  }
`;

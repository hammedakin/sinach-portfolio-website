import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 100%;
  display: flex;
  flex-direction: row;
  gap: 15px;
  margin-top: 92px;
  padding: 5px 0px;

  .mara,
  .turing {
    width: 180px;
  }
  .turing {
    margin-left: 25px;
  }
  @media (max-width: 1300px) {
    width: 100% !important;
    overflow-x: scroll;
  }
  @media (max-width: 1024px) {
    margin-top: 25px;
    img {
      width: 150px;
    }
    .mara,
    .turing {
      width: 100px;
    }
  }
  @media (max-width: 480px) {
    margin-top: 25px;
    img {
      width: 100px;
    }
    .mara,
    .turing {
      width: 71px;
    }
  }
`;

import styled from "styled-components";
import { Container } from "../../pages/Home/Home.styled";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

const RefarmFarm = () => {
  return (
    <StyledRefarmFarm>
      <Container>
        <Navbar />

        <Footer />
      </Container>
    </StyledRefarmFarm>
  );
};

export default RefarmFarm;

const StyledRefarmFarm = styled.main`
  margin-top: 151px;
  min-height: 100vh;
  h2 {
    font-weight: 700;
    font-size: 48px;
    line-height: 58px;
    background: linear-gradient(180deg, #ffffff 0%, #408cff 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  h3 {
    font-weight: 700;
    font-size: 38px;
    line-height: 48px;
    color: #ffffff;
    margin-top: 30px;
  }
  h4 {
    font-weight: 700;
    font-size: 25px;
    line-height: 38px;
    color: #ffffff;
    margin-top: 20px;
  }
  h5 {
    font-weight: 500;
    font-size: 18px;
    line-height: 28px;
    color: #c4c4c4;
  }
  p,
  ul li,
  ol li {
    font-weight: 400;
    font-size: 16px;
    line-height: 29px;
    color: #c4c4c4;
  }
`;

export const Images = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 20px;
`;

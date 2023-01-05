import { Container, Main, SubMain } from "./Works.styled";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import AllWorks from "../../components/Works/AllWorks";
import Project from "../../components/Projects/Project";

const Works = () => {
  return (
    <Container>
      <Navbar />
      <Main>
        <h2 className="header">All Featured Works</h2>
        <h3 className="subHeader">Product Design Projects</h3>
        <AllWorks />
      </Main>
      <SubMain>
        <h3>Other projects/UI Designs=</h3>
        <Project />
      </SubMain>
      <Footer />
    </Container>
  );
};

export default Works;

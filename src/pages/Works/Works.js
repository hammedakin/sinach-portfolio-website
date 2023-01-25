import { Container, Main, SubMain } from "./Works.styled";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import AllWorks from "../../components/Works/AllWorks";
import Project from "../../components/Projects/Project";
import { useEffect } from "react";
import PageLoader from "../../components/PageLoader";

const Works = () => {
  useEffect(() => {
    document.title = "Sinach Pat | Works";
  }, []);
  return (
    <Container>
      {<PageLoader age={5000} />}

      <Navbar />
      <Main>
        <h2 className="header">All Featured Works</h2>
        <h3 className="subHeader">Product Design Projects</h3>
        <AllWorks />
      </Main>
      <SubMain>
        <h3>Other projects/UI Designs</h3>
        <Project />
      </SubMain>
      <Footer />
    </Container>
  );
};

export default Works;

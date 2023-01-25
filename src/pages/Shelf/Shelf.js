import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import PersonalKnowledge from "../About/PersonalKnowledge";
import { Container } from "../Home/Home.styled";
import AllShelf from "./AllShelf";
import { StyledShelf } from "./Shelf.styled";
import { useEffect } from "react";
import PageLoader from "../../components/PageLoader";

const Shelf = () => {
  useEffect(() => {
    document.title = "Sinach Pat | Shelf";
  }, []);

  return (
    <StyledShelf>
      {<PageLoader age={5000} />}

      <Container>
        <Navbar />

        <div className="mt-5">
          <h1 className="pt-md-5">Some awesome books</h1>
          <p>
            These are some books I’ve read and feel it’ll be a cool read for
            anyone, designers etc.
          </p>
          <hr />
        </div>

        <AllShelf />

        <div className="mt-5">
          <h1 className="pt-md-5">Personal knowledge works</h1>
          <p>
            These are some templates and contents I’ve worked on for myself and
            other product persons.
          </p>
          <hr />
        </div>

        <PersonalKnowledge />
        <Footer />
      </Container>
    </StyledShelf>
  );
};

export default Shelf;

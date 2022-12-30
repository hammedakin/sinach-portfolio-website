import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import { Container, Organizations } from "./Home.styled";
import Logos from "../../components/Logos/Companies";

const Home = () => {
  return (
    <Container>
      <Navbar />

      <Organizations>
        <h2>
          Some organizations I’ve{" "}
          <span className="mobileSpan"> contributed to </span>
          <span className="desktopSpan">& worked with</span>{" "}
        </h2>
        <p>
          Some organizations I have contributed to and worked with include
          non-profit organizations, charities, and community groups. My
          contributions and work with various organizations have allowed me to
          make a positive impact in my community and my field. I am committed to
          continuing to support and contribute to organizations that align with
          my values and goals.
        </p>
      </Organizations>
      <Logos />
      <Footer />
    </Container>
  );
};

export default Home;

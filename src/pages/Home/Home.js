import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Design from "../../components/Design/Design";
import Works from "../../components/Works/Works";
import {
  Container,
  SubContainer,
  Organizations,
  Banner,
  DesignProcess,
  MyWorks,
} from "./Home.styled";
import Logos from "../../components/Logos/Companies";
import { StyledButton } from "../../components/GlobalStyles.styled";
import { BsArrowRight, BsArrowDown } from "react-icons/bs";
import PageLoader from "../../components/PageLoader";
import RotatingText from "../../components/RotatingText/RotatingText";

const Home = () => {
  return (
    <Container>
      {<PageLoader age={7000} />}
      <Navbar />

      <Banner>
        <div className="bannerContent">
          <p className="intro">
            Hi 👋, I’m Osinachi Patrick. A Product Designer.
          </p>
          <h1>
            {" "}
            <span className="first"> Turning dreams </span>
            <span className="second">into </span>
            <span className="third">Excellent Products</span>{" "}
          </h1>
          <p>
            I was a food scientist turned world class product designer. I have 4
            years experience working with teams to build products and services
            that fits the market with <b>Excellence as my trademark.</b>
          </p>
          <div>
            <a href="mailto:sinachpat@gmail.com">
              {" "}
              <StyledButton>
                Hire me <BsArrowRight />{" "}
              </StyledButton>
            </a>{" "}
            <div>
              <RotatingText />
            </div>
          </div>
        </div>
        <div className="bannerImg">
          <img
            src="https://res.cloudinary.com/dwxv6xoni/image/upload/q_auto:best/f_auto/v1674122168/Sinachpat/myimage_ullgke.png"
            alt="Profile_Image"
          />
          <a href="https://drive.google.com/drive/folders/12eTziSjf7LMnLBx-8ARv0Qn2ClargyJt?usp=sharing">
            Interaction Design Foundation Certified <BsArrowRight />
          </a>
        </div>
      </Banner>

      <SubContainer>
        <DesignProcess>
          <h2>My Design Process</h2>
          <p>
            Whether working as a solo designer or with a team, I approach design
            solutions using the standard design thinking methodology of Empathy,
            Define, Ideate, Prototype and test and continous iteration to ensure
            product excellence. <b>Learn more my skillsets and competencies.</b>{" "}
            <BsArrowDown className="arr" />
          </p>
          <Design />
        </DesignProcess>

        <MyWorks>
          <h2>Selected Projects</h2>
          <p>
            Read through some of my works and get a picture of how I approach
            projects
          </p>
          <Works />
        </MyWorks>
      </SubContainer>

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
        <Logos />
      </Organizations>
      <Footer />
    </Container>
  );
};

export default Home;

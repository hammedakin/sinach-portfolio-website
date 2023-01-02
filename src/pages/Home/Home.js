import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Design from "../../components/Design/Design";
import Works from "../../components/Works/Works";
import { Container, Organizations, Banner, DesignProcess } from "./Home.styled";
import Logos from "../../components/Logos/Companies";
import { Link } from "react-router-dom";
import BannerImage from "../../assets/bannerImage.svg";
import ProfileImage from "../../assets/profileImage.png";
import { BsArrowRight, BsArrowDown } from "react-icons/bs";

const Home = () => {
  return (
    <Container>
      <Navbar />

      <Banner>
        <div className="bannerContent">
          <p>Hi 👋, I’m Osinachi Patrick. I am a</p>
          <h1>
            {" "}
            <span className="first">Food Scientist </span>
            <span className="second">turned </span>
            <span className="third">Product Designer</span>{" "}
          </h1>
          <p>
            I was a food scientist turned world class product designer. I have
            worked with teams to build products and services that fits the
            market with <b>Excellence as my trademark.</b>
          </p>
          <div>
            <button>
              <Link to="/">Hire me </Link> <BsArrowRight />
            </button>
            <img src={BannerImage} alt="Banner Image" />
          </div>
        </div>
        <div className="bannerImg">
          <img src={ProfileImage} alt="Profile Image" />
          <Link to="/">
            Interaction Design Foundation Certified <BsArrowRight />
          </Link>
        </div>
      </Banner>

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
      <Works />

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

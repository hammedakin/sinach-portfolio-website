import { FooterCont, Container, Img, Socials } from "./Footer.styled";
import {
  FaArrowRight,
  FaLinkedinIn,
  FaTwitter,
  FaMediumM,
} from "react-icons/fa";
import footerImage from "../../assets/Cook 1.png";
import footerMobileImg from "../../assets/Cook 2.png";

const Footer = () => {
  return (
    <Container>
      <FooterCont>
        <footer>
          <div>
            <h2>
              Got a new product Idea? <br /> Do you need to bring magic to an
              already existing product?
            </h2>
            <p>
              {" "}
              Lets <span>cook</span> talk <FaArrowRight />
            </p>
          </div>
          <Img>
            <img src={footerImage} className="des" alt="" />
            <img src={footerMobileImg} className="res" alt="" />
          </Img>
        </footer>
      </FooterCont>
      <Socials>
        <div>
          <FaLinkedinIn />
        </div>
        <div>
          <FaTwitter />
        </div>
        <div>
          <FaMediumM />
        </div>
      </Socials>
    </Container>
  );
};

export default Footer;

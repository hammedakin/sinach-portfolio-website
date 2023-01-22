import { FooterCont, Container, Img, Socials } from "./Footer.styled";
import {
  FaArrowRight,
  FaLinkedinIn,
  FaTwitter,
  FaMediumM,
} from "react-icons/fa";

const Footer = () => {
  return (
    <Container>
      <FooterCont>
        <footer>
          <div>
            <h4>
              Got a new product Idea? <br /> Do you need to bring magic to an
              already existing product?
            </h4>
            <a href="mailto:sinachpat@gmail.com" className="cont">
              {" "}
              <p className="p">Lets</p> <span>cook</span>{" "}
              <p className="p">talk</p> <FaArrowRight />
            </a>
          </div>
          <Img>
            <img
              src="https://res.cloudinary.com/dwxv6xoni/image/upload/q_auto:best/f_auto/v1674122159/Sinachpat/Cook_1_f93ppq.png"
              className="des"
              alt=""
            />
            <img
              src="https://res.cloudinary.com/dwxv6xoni/image/upload/q_auto:best/f_auto/v1674122159/Sinachpat/Cook_2_cxwoti.png"
              className="res"
              alt=""
            />
          </Img>
        </footer>
      </FooterCont>
      <Socials>
        <a href="https://www.linkedin.com/in/osinachi-patrick/">
          <div>
            <FaLinkedinIn />
          </div>
        </a>

        <a href="https://twitter.com/sinachpatrick">
          <div>
            <FaTwitter />
          </div>
        </a>

        <a href="https://medium.com/@sinachpat">
          <div>
            <FaMediumM />
          </div>
        </a>
      </Socials>
    </Container>
  );
};

export default Footer;

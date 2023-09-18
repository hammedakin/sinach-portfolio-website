import { refarmWork } from "../../data/data";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import { StyledButton } from "../GlobalStyles.styled";
import Navbar from "../Navbar/Navbar";
import { RefarmContainer, MyWorks } from "../../pages/Home/Home.styled";
import { Container } from "./Works.styled";
import { Main } from "../../pages/Works/Works.styled";
import Footer from "../Footer/Footer";

const RefarmWorks = () => {
  return (
    <RefarmContainer>
      <Navbar />

      <Main>
        <h2 className="header">
          Refarm: The making of the Food supply chain system
        </h2>
        <p>
          Design Case studies for Refarm for Field Agents, Refarm for Farmers
          and Refarm for Businesses
        </p>
        <p>
          The three products were each designed for the three stakeholders in
          the value chain and it was tested to fit their flow for the different
          operational activities the farmers, field agents, and businesses carry
          out in playing their roles in the chain. Read the case study of the
          making of each of the product below:
        </p>
      </Main>

      <MyWorks>
        {refarmWork.map(({ img, title, content, link }, i) => (
          <Container key={i}>
            <div className="content">
              <h3>{title}</h3>
              <p> {content} </p>

              <Link to={link}>
                <StyledButton>
                  Read Case Study <BsArrowRight />
                </StyledButton>
              </Link>
            </div>
            <div className="image">
              <img src={img} alt="card_image" />
            </div>
          </Container>
        ))}
      </MyWorks>

      <Footer />
    </RefarmContainer>
  );
};

export default RefarmWorks;

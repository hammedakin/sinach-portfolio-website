// import { useState } from "react";
import { works } from "../../data/data";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import { Container } from "./Works.styled";
import { StyledButton } from "../GlobalStyles.styled";

const Works = () => {
  // const [name, setName] = useState("design");

  return (
    <>
      {/* <Tab>
        <button
          className="active"
          onClick={(e) => {
            let design = e.target;
            setName("design");

            const btns = e.target.parentElement.childNodes;
            btns.forEach((btn) => {
              btn.classList.remove("active");
            });

            design.classList.add("active");
          }}
        >
          Product Design
        </button>
        <button
          onClick={(e) => {
            let management = e.target;
            setName("management");
            const btns = e.target.parentElement.childNodes;
            btns.forEach((btn) => {
              btn.classList.remove("active");
            });

            management.classList.add("active");
          }}
        >
          Product Management
        </button>
      </Tab> */}
      {works
        // .filter((work) => work.class === name)
        .map(({ img, title, content, link }, i) => (
          <Container key={i}>
            <div className="content">
              <h3>{title}</h3>
              <p> {content} </p>

              <Link to={link}>
                {title === "Refarm" ? (
                  <StyledButton>
                    View Case Studies <BsArrowRight />
                  </StyledButton>
                ) : (
                  <StyledButton>
                    Read Case Study <BsArrowRight />
                  </StyledButton>
                )}
              </Link>
            </div>
            <div className="image">
              <img src={img} alt="card_image" />
            </div>
          </Container>
        ))}
    </>
  );
};

export default Works;

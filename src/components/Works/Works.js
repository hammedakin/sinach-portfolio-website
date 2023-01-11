import { useState } from "react";
import { works } from "../../data/data";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import { Container, Tab } from "./Works.styled";

const Works = () => {
  const [name, setName] = useState("design");
  // const active = "active";
  return (
    <>
      <Tab>
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
      </Tab>
      {name
        ? works
            .filter((work) => work.class === name)
            .map(({ img, title, content }, i) => (
              <Container key={i}>
                <div className="content">
                  <h3>{title}</h3>
                  <p> {content} </p>
                  <button>
                    <Link to="/">Read Case Study </Link> <BsArrowRight />
                  </button>
                </div>
                <div className="image">
                  <img src={img} alt="card_image" />
                </div>
              </Container>
            ))
        : "No content"}
    </>
  );
};

export default Works;

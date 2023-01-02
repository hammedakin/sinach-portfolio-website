import { works } from "../../data/data";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import { Container } from "./Works.styled";

const Works = () => {
  return (
    <>
      {works.map(({ img, title, content }, i) => (
        <Container>
          <div className="content">
            <h2>{title}</h2>
            <p> {content} </p>
            <button>
              <Link to="/">Read Case Study </Link> <BsArrowRight />
            </button>
          </div>
          <div className="image">
            <img src={img} alt="card-image" />
          </div>
        </Container>
      ))}
    </>
  );
};

export default Works;

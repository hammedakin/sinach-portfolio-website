import { works } from "../../data/data";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import { Container } from "./Works.styled";

const AllWorks = () => {
  return (
    <>
      {works.map(({ img, title, content }, i) => (
        <Container key={i}>
          <div className="content">
            <h3>{title}</h3>
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

export default AllWorks;

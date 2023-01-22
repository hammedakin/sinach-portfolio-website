import { projects } from "../../data/data";
import { Container } from "./Project.styled";
import { Link } from "react-router-dom";

const Project = () => {
  return (
    <Container>
      {projects.map(({ img, title }, i) => (
        <div className="content" key={i}>
          <img src={img} alt="project_image" />
          <p> {title} </p>
        </div>
      ))}
    </Container>
  );
};

export default Project;

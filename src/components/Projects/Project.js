import { projects } from "../../data/data";
import { Container } from "./Project.styled";
import { Link } from "react-router-dom";

const Project = () => {
  return (
    <Container>
      {projects.map(({ img, title, link }, i) => (
        <div className="content" key={i}>
          <img src={img} alt="project_image" />
          <Link to={link}> {title} </Link>
        </div>
      ))}
    </Container>
  );
};

export default Project;

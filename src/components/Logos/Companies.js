import Stanrute from "../../assets/stanrute logo-45 1.svg";
import Refarm from "../../assets/refarm logo 2-06.svg";
import Mara from "../../assets/maralogo 1.svg";
import Turing from "../../assets/Turing white 1.svg";
import Sonr from "../../assets/White 1.svg";
import { Container } from "./Companies.styled";

const Logo = () => {
  const MySVG = {
    Stanrute,
    Refarm,
    Mara,
    Turing,
    Sonr,
  };
  return (
    <Container>
      <img src={MySVG.Stanrute} alt="Stanrute Logo" />
      <img src={MySVG.Refarm} alt="Refarm Logo" />
      <img src={MySVG.Mara} alt="Mara Logo" />
      <img src={MySVG.Turing} className="turing" alt="Turing Logo" />
      <img src={MySVG.Sonr} alt="Sonr Logo" />
    </Container>
  );
};

export default Logo;

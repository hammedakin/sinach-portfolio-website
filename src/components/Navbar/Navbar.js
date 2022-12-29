import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { HiBars3BottomRight } from "react-icons/hi2";
import { FaTimes } from "react-icons/fa";
import { Header, Nav } from "./Navbar.styled";
import { useRef } from "react";

const Navbar = () => {
  const navRef = useRef();
  const showNavBar = () => {
    navRef.current.classList.toggle("responsive");
  };
  return (
    <Header>
      <Logo />
      <Nav ref={navRef}>
        <Link to="/">About me</Link>
        <Link to="/">Works</Link>
        <Link to="/"> Shelf </Link>
        <Link to="/" className="resume">
          Download Resume
        </Link>
        <button className="nav-btn nav-close-btn" onClick={showNavBar}>
          <FaTimes />
        </button>
      </Nav>

      <button className="nav-btn " onClick={showNavBar}>
        <HiBars3BottomRight />
      </button>
    </Header>
  );
};

export default Navbar;

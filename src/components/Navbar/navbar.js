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

  const navLinks = [
    { to: 'about', title: 'About me' },
    { to: '', title: 'Works' },
    { to: 'shelf', title: 'Shelf' },
  ];
  return (
    <Header>
      <Logo className="des" />
      <Nav ref={navRef}>
        {navLinks.map(({ title, to }, i) =>
          <Link to={to} onClick={showNavBar} key={i}>{title}</Link>
        )}
        <Link to="/" className="resume">
          Download Resume
        </Link>
        <button className="nav-btn nav-close-btn" onClick={showNavBar}>
          <FaTimes />
        </button>
      </Nav>

      <button className="nav-btn" onClick={showNavBar}>
        <HiBars3BottomRight />
      </button>
    </Header>
  );
};

export default Navbar;

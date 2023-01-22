import { Link, NavLink } from "react-router-dom";
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
    { to: "about", title: "About me" },
    { to: "works", title: "Works" },
    { to: "shelf", title: "Shelf" },
  ];
  return (
    <Header>
      <Link to="/">
        <Logo className="des" />
      </Link>
      <Nav ref={navRef}>
        {navLinks.map(({ title, to }, i) => (
          <NavLink
            to={`/${to}`}
            onClick={showNavBar}
            className={({ isActive }) =>
              isActive ? "activeClassName" : undefined
            }
            key={i}
          >
            {title}
          </NavLink>
        ))}
        <a
          href="https://drive.google.com/file/d/1pYCATXyWPrFaJrXOLlkeHWWee0qc45vK/view?usp=sharing"
          className="resume"
        >
          Download Resume
        </a>
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

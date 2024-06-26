import { Link, useLocation } from 'react-router-dom';
import "../styles/Navbar.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [expandNavbar, setExpandNavbar] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);

  return (
    <div className={`navbar ${expandNavbar ? "expanded" : ""}`}>
      <div className="toggleButton">
        <button onClick={() => setExpandNavbar(prev => !prev)}>
          <RxHamburgerMenu />
        </button>
      </div>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/projects">Projects</Link>
      </div>
    </div>
  );
};

export default Navbar;

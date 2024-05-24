import { Link } from 'react-router-dom'
import "../styles/Navbar.css"
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="toggleButton">
            <button><RxHamburgerMenu /></button>
        </div>
        <div className="links">
            <Link to="/">Home</Link>
            <Link to="/skills">Skills</Link>
            <Link to="/projects">Projects</Link>
        </div>
    </div>
  )
}

export default Navbar

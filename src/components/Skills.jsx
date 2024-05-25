import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaReact } from "react-icons/fa";import { IoLogoJavascript } from "react-icons/io5";
import { FaSass } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";


const Skills = () => {
  return (
    <div>
      <h1>THis is the Skills Page</h1>
      <div className="skills-container">
        <div className="skill-card">
          <FaHtml5 />
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus eveniet ducimus </p>
        </div>
        <div className="skill-card">
          <FaCss3Alt />
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus eveniet ducimus </p>
        </div>
        <div className="skill-card">
          <IoLogoJavascript />
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus eveniet ducimus </p>
        </div>
        <div className="skill-card">
          <FaReact />
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus eveniet ducimus </p>
        </div>
        <div className="skill-card">
          <FaSass />
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus eveniet ducimus </p>
        </div>
        <div className="skill-card">
          <RiTailwindCssFill />
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus eveniet ducimus </p>
        </div>
      </div>
    </div>
  )
}

export default Skills

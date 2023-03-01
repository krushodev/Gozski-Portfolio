import"./NavBar.css";
import { BsLinkedin } from "react-icons/bs";

export const NavBar = () => {
  return (
    <div className="parent-navbar">
      <div className="navbar-container">
        <div className="navbar-info">
            <h1><span>&#62;</span>AGUSTIN GÓMEZ KRUCHOWSKI</h1>
            <h2><span>&#62;</span>VISUAL & MOTION DESIGNER</h2>
        </div>
        <a href="https://www.linkedin.com/in/agustingozski/" target="_blank" rel="noreferrer" className="navbar-icon">
          <span>&#62;</span>
          <span><BsLinkedin/></span>
        </a>
      </div>
    </div>
  )
}
import "./NavBar.css";
import { BsLinkedin } from "react-icons/bs"

export const NavBar = () => {
  return (
    <div className="parent">
      <div className="navbar-container">
        <div className="navbar-info">
            <h1><span>&#62;</span>AGUSTIN GÓMEZ KRUCHOWSKI</h1>
            <h2><span>&#62;</span>VISUAL & MOTION DESIGNER</h2>
        </div>
        <div className="navbar-icon">
          <span>&#62;</span>
          <BsLinkedin/>
        </div>
      </div>
    </div>
  )
}
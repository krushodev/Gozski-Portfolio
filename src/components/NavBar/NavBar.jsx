import"./NavBar.css";
import { BsLinkedin } from "react-icons/bs";
import { BurgerMenu } from "../BurgerMenu/BurgerMenu";

export const NavBar = () => {
  return (
    <>
      <BurgerMenu/>
      <div className="parent-navbar">
        <div className="navbar-container">
          <div className="navbar-info">
              <h1><span>&#62;</span>AGUSTIN GÓMEZ KRUCHOWSKI</h1>
              <h2><span>&#62;</span>VISUAL & MOTION DESIGNER</h2>
          </div>
          <a href="https://linkedin.com" className="navbar-icon">
            <span>&#62;</span>
            <span><BsLinkedin/></span>
          </a>
        </div>
      </div>
    </>
  )
}
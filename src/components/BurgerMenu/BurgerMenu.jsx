import "./BurgerMenu.css";
import { slide as Menu } from "react-burger-menu";
import { BsLinkedin } from "react-icons/bs";
import { Link } from "react-router-dom";


export const BurgerMenu = ({isInfo}) => {
    return(
        <Menu right>
            <p><span>&#62;</span>VISUAL & MOTION DESIGNER</p>
            <a href="https://www.linkedin.com/in/agustingozski/" target="_blank" rel="noreferrer" className="burger-menu-linkedin">
                <span>&#62;</span>
                <BsLinkedin/>
            </a>
            {
                isInfo ? <Link to={"/"}><p><span>&#62;</span>HOMEPAGE</p></Link>
                :
                <Link to={"/info"}><p><span>&#62;</span>INFO</p></Link>
            }
            <p><a href="mailto:agozski@gmail.com"><span>&#62;</span>EMAIL</a></p>
        </Menu>
    );
}
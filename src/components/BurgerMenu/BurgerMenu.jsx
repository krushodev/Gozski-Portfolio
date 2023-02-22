import "./BurgerMenu.css";
import { slide as Menu } from "react-burger-menu";
import { BsLinkedin } from "react-icons/bs";


export const BurgerMenu = () => {
    return(
        <Menu right isOpen={true}>
            <p><span>&#62;</span>VISUAL & MOTION DESIGNER</p>
            <div className="burger-menu-linkedin">
                <span>&#62;</span>
                <BsLinkedin/>
            </div>
            <p><span>&#62;</span>INFO</p>
            <p><span>&#62;</span>EMAIL</p>
        </Menu>
    );
}
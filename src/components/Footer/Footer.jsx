import "./Footer.css";
import { Link } from "react-router-dom";

export const Footer = ({isInfo}) => {
  return (
    <div className="parent-footer">
      <div className="footer-container">
        {
          isInfo ? <Link to={"/"}><h3><span>&#62;</span>HOMEPAGE</h3></Link>
          :
          <Link to={"/info"}><h3><span>&#62;</span>INFO</h3></Link>
        }
        <h3><a href="mailto:agozski@gmail.com"><span>&#62;</span>EMAIL</a></h3>
      </div>
    </div>
  )
}
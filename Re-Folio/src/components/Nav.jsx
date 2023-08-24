import { Link } from "react-router-dom";
import  NavBar  from "./UI/NavBar";
import  "../styles/navLinks.css"

export default function Nav(){
    return(
        <div className="nav">
        <NavBar className="navLinks"
        links = 
            {[
                <Link key={1} className="links"  to = "/home"> Home </Link>,
                <Link key={2} className="links" to = "/about"> About Me</Link>,
                <Link key={3} className="links" to = "/portfolio"> Portfolio</Link>,
                <Link key={4} className="links" to = "/contact">Contact Me</Link>
            ]}
        /></div>
    )
}
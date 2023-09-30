import logo from "../../public/images/logo.png";
import { useState } from 'react';
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";
const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav)
    };
    return (
        <div className="header">
            <div className="navbar">
                <a href="/" className="logo">
                    <img className="logo_img" src={logo} alt="logo-img" />
                </a>
                {/* barsIcon */}
                <div onClick={handleNav} className="bars-icon ">
                    {
                        nav ? <FaTimes size={30} style={{ color: "white", }} /> : <FaBars size={30} style={{ color: "white", }} />
                    }
                </div>

                <ul onClick={handleNav} className={nav ? "nav-menu active" : "nav-menu"}>
                    <li className="nav-item">
                        <a href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a href="#about">About</a>
                    </li>
                    <li className="nav-item">
                        <a href="#testimonials">Testimonials</a>
                    </li>
                    <li className="nav-item">
                        <a href="#demo">Demo</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;
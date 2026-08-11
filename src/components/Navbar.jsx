import { useState } from "react";
import "../styles/Navbar.css";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="navbar">

            <a
                href="#home"
                className="logo"
                onClick={() => setMenuOpen(false)}
            >
                SS
            </a>

            <div
                className="menu-icon"
                onClick={() => setMenuOpen(!menuOpen)}
            >
                ☰
            </div>

            <ul className={menuOpen ? "nav-links active" : "nav-links"}>

                <li>
                    <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
                </li>

                <li>
                    <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
                </li>

                <li>
                    <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
                </li>

                <li>
                    <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
                </li>

            </ul>

        </nav>
    );
}

export default Navbar;
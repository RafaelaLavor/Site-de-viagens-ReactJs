import React from "react";
import { Tb360View } from "react-icons/tb";
import "./Navbar.css"


function Navbar() {
    return (
        <section className="navSection">
            <header className="header flex">
                <div className="logoDiv">
                    <h1>Webrafz<Tb360View /></h1>
                </div>
                <div className="navBar">
                    <ul className="navlist flex">
                        <li className="navItem">
                            <a href="#" className="navLink">home</a>
                        </li>
                        <li className="navItem">
                            <a href="#" className="navLink">home</a>
                        </li>
                        <li className="navItem">
                            <a href="#" className="navLink">home</a>
                        </li>
                        <li className="navItem">
                            <a href="#" className="navLink">home</a>
                        </li>
                    </ul>
                </div>
            </header>
        </section>
    );
}
export default Navbar
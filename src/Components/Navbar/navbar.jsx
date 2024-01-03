import React, { useState } from "react";
import { Tb360View } from "react-icons/tb";
import "./Navbar.css"
import { RiDoorClosedLine } from "react-icons/ri";
import { PiDotsThreeOutlineBold } from "react-icons/pi";


function Navbar() {
    const [active, setActive] = useState("navBar")
    const shownav = () => {
        setActive("navBar activeNavBar")
    }

    const removenav = () => {
        setActive("navBar")
    }


    return (
        <section className="navSection">
            <header className="header flex">
                <div className="logo">
                    <h1>FlexStars<Tb360View className="icon" /></h1>
                </div>
                <div className={active
                }>
                    <ul className="navlist flex">
                        <li className="navItem">
                            <a href="#" className="navLink">Trabalhe conosco</a>
                        </li>
                        <li className="navItem">
                            <a href="#" className="navLink">Ofertas natalinas</a>
                        </li>
                        <li className="navItem">
                            <a href="#" className="navLink">Equipes aéreas</a>
                        </li>
                        <li className="navItem">
                            <a href="#" className="navLink">Sobre nós</a>
                        </li>
                        <button className="btn">
                            <a href="#">RESERVAS</a>
                        </button>
                    </ul>
                    <div className="porta" onClick={removenav}>
                        <RiDoorClosedLine className="icon" />
                    </div>
                </div>
                <div className="togglenavbar" onClick={shownav}>
                    <PiDotsThreeOutlineBold className="icon" />
                </div>
            </header>
        </section>
    );
}

export default Navbar
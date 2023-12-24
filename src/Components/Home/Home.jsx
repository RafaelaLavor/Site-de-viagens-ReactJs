import React from "react";
import "./Home.css"
import viao from "../../Assets/viao.jpg"
import { TbGps } from "react-icons/tb";
import { FaFilter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { FaTwitch } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";


const Home = () => {
    return (
        <section className="home">
            <div className="overlay"></div>
            <img src={viao} alt="0" className="fundo" />
            <div className="homeContent container">
                <div className="textDiv">
                    <span className="smallText">Nossos Pacotes</span>
                    <h1 className="homeTitle">Viaje Conosco</h1>
                </div>

                <div className="cardDiv grid">
                    <div className="destinetionInput">
                        <label htmlFor="city">
                            <p>Procure seu destino</p>
                        </label>
                        <div className="input flex">
                            <input type="text" placeholder="Qual a cidade?" />
                            <TbGps className="icon" />
                        </div>
                    </div>

                    <div className="dateInput">
                        <label htmlFor="date">
                            <p>Datas</p>
                        </label>
                        <div className="input flex">
                            <input type="date" />
                        </div>
                    </div>

                    <div className="priceInput">
                        <div className="labelTotal flex">
                            <label htmlFor="date">
                                Passagens até:
                            </label>
                            <h4 className="total">$10.000</h4>
                        </div>
                        <div className="input flex">
                            <input type="range" max="10000" min="1000" />
                        </div>
                    </div>
                    <div className="searchOptions flex">
                        <FaFilter className="icon" />
                        <span>FILTROS</span>
                    </div>
                </div>
                <div className="homeFooter flex">
                    <div className="rightIcons">
                        <FaFacebook className="icon" />
                        <FaInstagram className="icon" />
                        <RiTwitterXFill className="icon" />
                    </div>
                    <div className="leftIcons flex">
                        <FaTwitch className="icon" />
                        <FaGithub className="icon" />
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Home

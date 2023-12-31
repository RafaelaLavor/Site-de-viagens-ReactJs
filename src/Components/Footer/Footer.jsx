import React, {useEffect} from "react";
import "./Footer.css"
import video from "../../Assets/seafooter.mp4"
import { RiMailSendLine } from "react-icons/ri";
import { Tb360View } from "react-icons/tb";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

import Aos from "aos";
import "aos/dist/aos.css"

const Footer = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])
    return (
        <section className="footer">
            <div className="videoDiv">
                <video src={video} loop autoPlay muted type="video/mp4">
                </video>
            </div>

            <div data-aos="fade-up" className="secContent container">
                <div className="contactDiv flex">
                    <div className="text">
                        <small>ENTREM EM CONTATO</small>
                        <h2>Viaje conosco</h2>
                    </div>

                    <div className="inputDiv flex">
                        <input type="text" placeholder="E-mail" />
                        <button className="btn flex" type="submit" >
                            ENVIAR <RiMailSendLine className="icon" />
                        </button>
                    </div>
                </div>

                <div className="footerCard flex">
                    <div className="footerIntro flex">
                        <div className="logoDiv">
                            <a href="#" className="logo flex">FlexStars<Tb360View className="icon" /></a>
                        </div>
                        <div className="footerParagraph">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur illo, ipsum maxime eum magni nobis nihil dolorem aperiam quo itaque, aliquid nisi. Nemo, qui sit. Dolorem, sint impedit? Eaque, exercitationem.
                        </div>
                        <div className="footerSocial flex">
                            <FaFacebook className="icon" />
                            <FaInstagram className="icon" />
                            <RiTwitterXFill className="icon" />
                            <FaGithub className="icon" />
                        </div>
                    </div>
                    <div className="footerLinks grid">
                        <div className="linkGroup">
                            <span className="groupTitle">NOSSA AGENCIA</span>

                            <li className="footerList flex">
                                <FaChevronRight className="icon" />
                                Serviços
                            </li>
                            <li className="footerList flex">
                                <FaChevronRight className="icon" />
                                Serviços
                            </li>
                            <li className="footerList flex">
                                <FaChevronRight className="icon" />
                                Serviços
                            </li>
                            <li className="footerList flex">
                                <FaChevronRight className="icon" />
                                Serviços
                            </li>
                        </div>
                        <div className="linkGroup">
                            <span className="groupTitle">NOSSOS PARCEIROS</span>

                            <li className="footerList flex">
                                <FaChevronRight className="icon" />
                                Rafaela
                            </li>
                            <li className="footerList flex">
                                <FaChevronRight className="icon" />
                                Ademir
                            </li>
                            <li className="footerList flex">
                                <FaChevronRight className="icon" />
                                ChatGpt
                            </li>
                            <li className="footerList flex">
                                <FaChevronRight className="icon" />
                                Spotify
                            </li>
                        </div>
                    </div>
                    <div className="footerDiv flex">
                        <small>MELHOR SITE DE VIAGENS DO MUNDO</small>
                        <small>COPYRIGHTS RESERVED - Y4NKLER</small>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer;
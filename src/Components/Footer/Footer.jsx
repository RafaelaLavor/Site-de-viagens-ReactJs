import React from "react";
import "./Footer.css"
import imgfooter from "../../Assets/imgfooter.jpg"
import { RiMailSendLine } from "react-icons/ri";

const Footer = () => {
    return (
        <section className="footer">
            <div className="imgDiv">
                <img src={imgfooter} />
            </div>
            <div className="secContent container">
                <div className="contactDiv flex">
                    <div className="text">
                        <small>
                            ENTREM EM CONTATO
                        </small>
                        <h2>
                            Viaje conosco
                        </h2>
                    </div>
                    <div className="inputDiv flex">
                        <input type="text" placeholder="E-mail" />
                        <button className="btn flex" type="submit" >
                            ENVIAR <RiMailSendLine className="icon" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer;
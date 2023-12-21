import React from "react";
import "./Home.css"
import viao from "../../Assets/viao.jpg"


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
            </div>
        </section>
    )
}

export default Home

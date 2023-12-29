import React from "react";
import "./Main.css"
import img from "../../Assets/img.jpeg"
import { GrMapLocation } from "react-icons/gr";
import { FaClipboardList } from "react-icons/fa";
import img2 from "../../Assets/img2.jpg"

const Data = [
    {
        id: 1,
        imgsrc: img,
        destTitle: "Rio de janeiro",
        location: "Brasil, Rio de janeiro",
        grade: "FAUNA E FLORA",
        fees: "$630",
        description: "O Rio de Janeiro, conhecido como a 'Cidade Maravilhosa', encanta com suas praias deslumbrantes, como Copacabana e Ipanema, e o icônico Cristo Redentor no Corcovado. A energia vibrante do carnaval e a vida noturna agitada refletem a rica cultura carioca."
    },
    {
        id: 2,
        imgsrc: img2,
        destTitle: "Natal",
        location: "Brasil, Rio grande do Norte",
        grade: "ÁGUAS CRISTALINAS",
        fees: "$830",
        description: "Natal, a cidade do sol no Rio Grande do Norte, encanta com suas praias de areias douradas, como Ponta Negra e Genipabu. Conhecida pela hospitalidade e cultura rica, Natal oferece uma experiência única, onde dunas, lagoas e festivais locais criam lembranças inesquecíveis à beira-mar."
    },

]
const Main = () => {
    return (
        <section className="main container section">
            <div className="divTitle">
                <h3 className="title">Lugares mais visitados</h3>
            </div>
            <div className="secContent grid">
                {
                    Data.map(({ id, imgsrc, destTitle, location, grade, fees,
                        description }) => {
                        return (
                            <div className="singleDiv" key={id}>
                                <div className="imgDiv">
                                    <img src={imgsrc} alt={destTitle} />
                                </div>
                                <div className="cardInfo">
                                    <h4 className="destTitle">
                                        {destTitle}
                                    </h4>
                                    <span className="continent flex">
                                        <GrMapLocation className="icon" />
                                        <span className="name">
                                            {location}
                                        </span>
                                    </span>
                                    <div className="fees flex">
                                        <div className="grade">
                                            <span>
                                                {grade}
                                            </span>
                                        </div>
                                        <div className="price">
                                            <h5>{fees}</h5>
                                        </div>
                                    </div>
                                    <div className="description">
                                        <p>{description}</p>
                                    </div>
                                    <button className="btn flex">
                                        DETALHES <FaClipboardList className="icon" />
                                    </button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>)
}

export default Main
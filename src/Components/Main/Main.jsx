import React, { useEffect } from "react";
import "./Main.css"
import img from "../../Assets/img.jpeg"
import { GrMapLocation } from "react-icons/gr";
import { FaClipboardList } from "react-icons/fa";
import img2 from "../../Assets/img2.jpg"
import aracaju from "../../Assets/aracaju.jpg"
import porto from "../../Assets/porto.jpg"
import manaus from "../../Assets/manaus.jpeg"
import campo from "../../Assets/campo.jpg"

import Aos from "aos";
import "aos/dist/aos.css"

const Data = [
    {
        id: 1,
        imgsrc: img,
        destTitle: "Rio de janeiro",
        location: "Brasil, Rio de janeiro",
        grade: "FAUNA E FLORA",
        fees: "$700",
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
    {
        id: 3,
        imgsrc: aracaju,
        destTitle: "Aracaju",
        location: "Brasil, Sergipe",
        grade: "PRAIAS NORDESTINAS",
        fees: "$720",
        description: "Aracaju, capital sergipana, é uma cidade à beira-mar com um charme que mescla história e modernidade. Suas praias, como a famosa Atalaia, oferecem tranquilidade e belezas naturais. Com uma rica cultura culinária e um ambiente acolhedor, Aracaju é um destino encantador para quem busca explorar a diversidade do nordeste brasileiro."
    },
    {
        id: 4,
        imgsrc: manaus,
        destTitle: "Manaus",
        location: "Brasil, Amazonas",
        grade: "NATUREZA E CULTURA",
        fees: "$680",
        description: "O Amazonas, gigante verde do Brasil, é lar da floresta amazônica, um tesouro de biodiversidade essencial para o equilíbrio global. O Rio Amazonas serpenteia a região, conectando ecossistemas únicos e comunidades que dependem dessa maravilha natural. A capital Manaus, entre o moderno e o selvagem, oferece uma porta de entrada para explorar a grandiosidade da Amazônia."
    },
    {
        id: 5,
        imgsrc: porto,
        destTitle: "Campo grande",
        location: "Brasil, Mato grosso do Sul",
        grade: "CORAÇÃO DO PANTANAL",
        fees: "$860",
        description: "Campo Grande, capital de Mato Grosso do Sul, é uma cidade acolhedora que reflete a diversidade cultural e a riqueza natural do Pantanal. Conhecida pela hospitalidade, suas amplas avenidas arborizadas e parques proporcionam uma atmosfera tranquila, enquanto a proximidade com a maior planície alagável do mundo oferece oportunidades únicas de ecoturismo e preservação ambiental."
    },
    {
        id: 6,
        imgsrc: campo,
        destTitle: "Porto Alegre",
        location: "Brasil, Rio grande do Sul",
        grade: "HARMONIA E TRADIÇÃO",
        fees: "$920",
        description: "Porto Alegre, a vibrante capital do Rio Grande do Sul, cativa visitantes com sua rica herança cultural e arquitetura marcante. Às margens do Rio Guaíba, a cidade oferece um cenário deslumbrante, com o pôr do sol no famoso pôr do sol do Gasômetro sendo um espetáculo imperdível. Conhecida por sua hospitalidade e diversidade gastronômica, Porto Alegre é uma fusão fascinante de tradição e modernidade no sul do Brasil."
    },
]
const Main = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])
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
                            <div data-aos="fade-up" className="singleDiv" key={id}>
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
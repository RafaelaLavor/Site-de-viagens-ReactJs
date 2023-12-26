import React from "react";
import "./Main.css"
import img from "../../Assets/img.jpeg"
import { GrMapLocation } from "react-icons/gr";

const Data = [
    {
        id: 1,
        imgsrc: img,
        destTitle: "Rio de janeiro",
        location: "Brasil",
        grade: "",
        fees: "630",
        description: "CV"
    },
    // {
    //     id: 2, 
    //     imgsrc: img2,
    //     destTitle: "Natal",
    //     location: "Brasil",
    //     grade: "",
    //     fees: "830",
    //     description: "Norte"
    // },

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
                                        <GrMapLocation  className="icon"/>
                                        <span className="name">
                                            {location}
                                        </span>
                                    </span>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>)
}

export default Main
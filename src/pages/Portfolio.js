import React, { useDebugValue } from "react"
import PortfolioImage from "../image/profile.jpg"

import { MdWeb } from "react-icons/md";
import { BsBrowserEdge } from "react-icons/bs";
import { FaWordpress } from "react-icons/fa";
import { IoLogoFigma } from "react-icons/io5";

export default function Portfolio(){
    return(
        <div className="portfolio" id="portfolio">
            <div className="portfolio-image">
                <img src={PortfolioImage} />
            </div>
            <div className="portfolio-section">
                <h2>My Portfolio</h2>
                <div className="cards">
                <div className="card">
                    <div className="card-title">
                        <MdWeb className="icon"/>
                        <span>Responsible Website Design</span>
                    </div>
                    <p>
                        Lorem Ipsum is simply 
                        dummy text of the printing 
                        and typesetting industry. 
                    </p>
                </div>
                <div className="card">
                    <div className="card-title">
                        <BsBrowserEdge className="icon"/>
                        <span>Full Stack Developer</span>
                    </div>
                    <p>
                        Lorem Ipsum is simply 
                        dummy text of the printing 
                        and typesetting industry. 
                    </p>
                </div>
                <div className="card">
                    <div className="card-title">
                        <FaWordpress className="icon"/>
                        <span>Wordpress develop</span>
                    </div>
                    <p>
                        Lorem Ipsum is simply 
                        dummy text of the printing 
                        and typesetting industry. 
                    </p>
                </div>
                <div className="card">
                    <div className="card-title">
                        <IoLogoFigma className="icon"/>
                        <span>Modern developing with FIGMA</span>
                    </div>
                    <p>
                        Lorem Ipsum is simply 
                        dummy text of the printing 
                        and typesetting industry. 
                    </p>
                </div>
                </div>
            </div>
        </div>
    )
}
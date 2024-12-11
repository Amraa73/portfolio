import React, { useDebugValue } from "react"
import ServiceImage from "../image/service.jpg"

export default function Services(){
    return(
        <div className="service" id="service">
            <h2>Services</h2>
            <div className="service-cards">
                <div className="card" style={{
                    backgroundImage:`url(${ServiceImage})`,
                    backgroundPosition:"center",
                    backgroundSize:"cover"
                }}>
                <div className="service-text">
                    <h2>Web Development</h2>
                    <p>
                        Lorem Ipsum is simply dummy 
                        text of the printing and typesetting 
                        industry. Lorem Ipsum has been the 
                        industry's standard dummy text ever
                        since the 1500s
                    </p>
                </div>
                </div>
                <div className="card" style={{
                    backgroundImage:`url(${ServiceImage})`,
                    backgroundPosition:"center",
                    backgroundSize:"cover"
                }}>
                <div className="service-text">
                    <h2>Web Development</h2>
                    <p>
                        Lorem Ipsum is simply dummy 
                        text of the printing and typesetting 
                        industry. Lorem Ipsum has been the 
                        industry's standard dummy text ever
                        since the 1500s
                    </p>
                </div>
                </div>
                <div className="card" style={{
                    backgroundImage:`url(${ServiceImage})`,
                    backgroundPosition:"center",
                    backgroundSize:"cover"
                }}>
                <div className="service-text">
                    <h2>Web Development</h2>
                    <p>
                        Lorem Ipsum is simply dummy 
                        text of the printing and typesetting 
                        industry. Lorem Ipsum has been the 
                        industry's standard dummy text ever
                        since the 1500s
                    </p>
                </div>
                </div>
                <div className="card" style={{
                    backgroundImage:`url(${ServiceImage})`,
                    backgroundPosition:"center",
                    backgroundSize:"cover"
                }}>
                <div className="service-text">
                    <h2>Web Development</h2>
                    <p>
                        Lorem Ipsum is simply dummy 
                        text of the printing and typesetting 
                        industry. Lorem Ipsum has been the 
                        industry's standard dummy text ever
                        since the 1500s
                    </p>
                </div>
                </div>
            </div>
        </div>
    )
}
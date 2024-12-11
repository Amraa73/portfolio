import React, { useDebugValue } from "react"
import { FaPhoneSquare } from "react-icons/fa";


export default function Contact(){
    return(
        <div className="contact" id="contact">
            <div className="contact-title">
                <h2>Contact us</h2>
                <a href="tel:+976 85556113"><FaPhoneSquare className="contact-icon"/></a>
            </div>
            <div className="input-field">
                <div className="inputs">
                    <input type="text" name="mail" placeholder="Enter your mail" />
                    <input type="text" name="username" placeholder="Username or Nickname" />
                    <input type="number" name="phnumber" placeholder="Enter phone number" />
                    <input type="text" name="title" placeholder="Subject" />
                </div>
                <div className="type">
                    <input type="text" placeholder="Type here..." />
                </div>
            </div>
        </div>
    )
}
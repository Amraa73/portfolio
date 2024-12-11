import React from "react";
// icon
import { FaFacebookSquare,FaInstagramSquare,FaGithubSquare } from "react-icons/fa";
// image
import Profile from "../image/profile.jpg"
export default function Home() {
  return (
    <div className="home" id="home">
      <div className="home-text">
        <div className="top-text">
          <h2>Hello ...</h2>
          <p>I`m Amarkhuu Oyunbaatar</p>
          <p className="exp">
            I am <span>Web Application Developer</span>
          </p>
          <div className="desc">
            <span >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy text
                ever since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book. It has survived not
                only five centuries,
            </span>
          </div>
        </div>
        <div className="bottom-text">
            <div className="social-links">
                <FaFacebookSquare className="icon"/>
                <FaGithubSquare className="icon"/>
                <FaInstagramSquare className="icon"/>
            </div>
            <button>Download CV</button>
        </div>
      </div>
      <div className="home-image"> 
        <img src={Profile} />
      </div>
    </div>
  );
}

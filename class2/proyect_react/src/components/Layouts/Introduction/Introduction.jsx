import React from "react";
import { IntroText } from "../../UI/IntroText/IntroText";
import { IntroButton } from "../../UI/IntroButton/IntroButton";
import { IntroImage } from "../../UI/IntroImage/IntroImage";
import imgIntro from "../../../assets/img/introduction/desarrolloweb.jpeg"
import './Introduction.css';

export const Introduction = () => {
    return(
        <div className="main_container">
            <div className="text_container">
                <IntroText/>
                <IntroButton/> 
            </div>
            <div className="img_container">
                <IntroImage src={imgIntro} alt={imgIntro}/>
            </div>                  
        </div>
    )
}
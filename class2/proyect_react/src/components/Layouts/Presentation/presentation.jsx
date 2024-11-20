import React from "react";
import perfil from "../../../assets/img/introduction/perfil.jpeg"
import { IntroImage } from "../../UI/IntroImage/IntroImage";

export const Presentation = () => {
    return(
        <div className="presentation_container">
            <div className="img_container">
                <IntroImage src={perfil} alt={perfil}/>
            </div>
            <div className="text_container">

            </div>
        </div>
    )
}
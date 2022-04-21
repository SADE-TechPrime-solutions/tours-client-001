import React from "react";
import { WhatsApp1, Envelope, Facebook, Ig2 } from "../Icons/Icons";

const SocialLinks = () => {
    return(
        <div className="social__links__side">
            <a href="/" className="social__link__side">
                <WhatsApp1 />
            </a>
            <a href="/" className="social__link__side">
                <Ig2 />
            </a>
            <a href="/" className="social__link__side">
                <Facebook />
            </a>
            <a href="mailto:zaphdev365@gmail.com" className="social__link__side">
                <Envelope />
            </a>
        </div>
    )
}

export default SocialLinks;
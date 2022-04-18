import React from "react";
import { ChevronRight } from "../Icons/Icons";

const ScrollTopBtn = () => {
    return(
        <button className="scroll-top">
            <a href="#home" className="scroll__top--link">
                <ChevronRight />
                <a href="#home" className="other__links--link">home</a>
            </a>
            <div className="other__links">
                <a href="#about" className="other__links--link">about</a>
                <a href="#upcoming-tours" className="other__links--link">upcoming tours</a>
                <a href="#team" className="other__links--link">team</a>
                <a href="#testimonies" className="other__links--link">testimonials</a>
                <a href="#subscribe" className="other__links--link">subscribe</a>
            </div>
        </button>
    )
}

export default ScrollTopBtn;
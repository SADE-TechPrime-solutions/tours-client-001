import React from "react";
import {WhatsApp1, Ig2, Facebook, Envelope} from './../../../Icons/Icons'

const Footer = () => {
    return(
        <footer className="fe_footer">
            <div className="fe-footer__abouts">
                <h2 className="fe-footer__title">about us</h2> 
                <p className="fe-footer__text">
                    wildereness alternative expedia is a tours and hike companys based in Kenya, Kirinyaga county, our tours are very cheap and pocket friendly, some of our tours are in fact free of charge. Try wildereness alternative expedia today and see a difference in how you have fun and relax you brain.
                </p>
            </div>
            <div className="fe_footer__links">
                <h2 className="fe-footer__title">quick links</h2>
                <ol className="fe-footer__list">
                    <li className="fe-footer__item"><a href="/" className="fe-footer__item--link">home</a></li>
                    <li className="fe-footer__item"><a href="/" className="fe-footer__item--link">tour arrangements</a></li>
                    <li className="fe-footer__item"><a href="/" className="fe-footer__item--link">benefits of taking this tour</a></li>
                    <li className="fe-footer__item"><a href="/" className="fe-footer__item--link">things you should know before taking any tour</a></li>
                </ol>
            </div>
            <div className="fe-footer__social">
            <h2 className="fe-footer__title">Reach us</h2>
                <div className="fe-footer__icon-links">
                    <a href="https://wa.link/azfz0" className="fe-footer__social--link">
                        <WhatsApp1 />
                    </a>
                    <a href="https://www.instagram.com/eastafricanorthwildsafaris/" className="fe-footer__social--link">
                        <Ig2 />
                    </a>
                    <a href="https://web.facebook.com/Wilderness-Alternative-Expendation-106636452031478" className="fe-footer__social--link">
                        <Facebook />
                    </a>
                    <a href="mailto:mutumakinyuakennedy@gmail.com" className="fe-footer__social--link">
                        <Envelope />
                    </a>
                </div>
                <div className="fe-footer__social--quicks">
                    <p className="fe-footer__social__link--text">Call : <span>+254743789655</span></p>
                    <p className="fe-footer__social__link--text">Email : </p>
                    <p className="fe-footer__social__link--text">Text Message : <span>+254743789655</span></p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
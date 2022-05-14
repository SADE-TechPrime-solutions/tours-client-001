import React from "react";
import { WhatsApp1, Ig2, Facebook, Envelope } from "./../../../Icons/Icons";

const Footer = () => {
  return (
    <footer className="fe_footer">
      <div className="fe-footer__abouts">
        <h2 className="fe-footer__title">about us</h2>
        <p className="fe-footer__text">
          Wilderness Alternativ Expedition is an independent adventure travel
          company located in Nanyuki Kenya and was founded in 2015 by Wild photographer and mountaineer
          Kennedy Mutuma, and developed over many years of organising and
          guiding expeditions around Africa It is an established guiding company
          with an emphasis on responsible travel and a high level of knowledge
          and experience. We have run trips to the summit of Mount Kilimanjaro
          and to the Northen Kenya! We offer many types of trips of all levels
          from mountains to jungle, and desert. But the majority of our trips
          are feasible treks, Wildphotography Expedition and adventure holidays
          for the enthusiastic hiker. A lot of our trips are to iconic
          locations such as Kilimanjaro, Lake Turkana, maasai Mara Mount Kenya,
          Sibiloi National park Serengeti, Samburu, Meru National Park, Mount Rwenzori, Mount Meru and so
          many places in East Africa
        </p>
      </div>
      <div className="fe_footer__links">
        <h2 className="fe-footer__title">quick links</h2>
        <ol className="fe-footer__list">
          <li className="fe-footer__item">
            <a href="/" className="fe-footer__item--link">
              home
            </a>
          </li>
          <li className="fe-footer__item">
            <a href="/" className="fe-footer__item--link">
              tour arrangements
            </a>
          </li>
          <li className="fe-footer__item">
            <a href="/" className="fe-footer__item--link">
              benefits of taking this tour
            </a>
          </li>
          <li className="fe-footer__item">
            <a href="/" className="fe-footer__item--link">
              things you should know before taking any tour
            </a>
          </li>
        </ol>
      </div>
      <div className="fe-footer__social">
        <h2 className="fe-footer__title">Reach us</h2>
        <div className="fe-footer__icon-links">
          <a href="https://wa.link/azfz0" className="fe-footer__social--link">
            <WhatsApp1 />
          </a>
          <a
            href="https://www.instagram.com/eastafricanorthwildsafaris/"
            className="fe-footer__social--link"
          >
            <Ig2 />
          </a>
          <a
            href="https://web.facebook.com/Wilderness-Alternative-Expendation-106636452031478"
            className="fe-footer__social--link"
          >
            <Facebook />
          </a>
          <a
            href="mailto:info@wildernessalternativeexpedition.com"
            className="fe-footer__social--link"
          >
            <Envelope />
          </a>
        </div>
        <div className="fe-footer__social--quicks">
          <p className="fe-footer__social__link--text">
            Call : <span>+254743789655</span>
          </p>
          <p className="fe-footer__social__link--text">
            Email : info@wildernessalternativeexpedition.com
          </p>
          <p className="fe-footer__social__link--text">
            Text Message : <span>+254743789655</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

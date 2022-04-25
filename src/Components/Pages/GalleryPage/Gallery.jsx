import React from "react";
import Heading from "../../Heading/Heading";
import ImageData from "./ImageData";
import img from "../../../Assets/images/bg2.jpg";
import Footer from "../../Footer/Footer";

import natureView from "../../../Assets/images/Nature-view.jpg";
import wildBeauty from "../../../Assets/images/wild-beauty.jpg";
import luxuriousAccomodation from "../../../Assets/images/luxirious-accomodation.jpg";
import outsideCamping from "../../../Assets/images/outside-Camping.jpg";
import moutainClimb from "../../../Assets/images/Mountain-Climb.jpg";
import swimmingActivity from "../../../Assets/images/swimming-activities.jpg";
import lakeBeauty from "../../../Assets/images/l-beauty.jpg";
import clientImage from "../../../Assets/images/client-image.jpg";
import culturalHeritage from "../../../Assets/images/Culture-heritage.jpg";
import communityImage from '../../../Assets/images/Client-1.jpg';
import family from '../../../Assets/images/L-view.jpg';
import amboselli from '../../../Assets/images/Amboseli-national-park.jpg';

const GalleryPage = () => {
  return (
    <React.Fragment>
      <Heading
        mainHeading="explore today as you view our success"
        subHeading="explore today"
        bgText="pictorial"
      />
      <div className="tours__page__container">
        <ImageData
          image={natureView}
          caption="our clients enjoying evening sun"
        />
        <ImageData image={wildBeauty} caption="the beauty of nature" />
        <ImageData
          image={luxuriousAccomodation}
          caption="enjoying luxurious accomodation during a tour"
        />
        <ImageData
          image={outsideCamping}
          caption="clients camping activity. Pure fun."
        />
        <ImageData
          image={moutainClimb}
          caption="hiking your way up a mountain."
        />
        <ImageData image={swimmingActivity} caption="diving activities" />
        <ImageData
          image={lakeBeauty}
          caption="the beautiful view of a lake is just one of the thousands of things you will enjoy"
        />
        <ImageData
          image={clientImage}
          caption="beautiful old but never forgotten"
        />
        <ImageData
          image={culturalHeritage}
          caption="be sure to find welcoming communities wherever we take you."
        />
        <ImageData image={communityImage} caption="community hike is also a thing you wanna enjoy for sure." />
        <ImageData image={family} caption="carrying family along to enjoy the beauty of nature is a superb thing to do." />
        <ImageData image={amboselli} caption="we will be waiting for you to take you to Amboselli at a very pocket friendy price." />
      </div>
      <Footer />
    </React.Fragment>
  );
};
export default GalleryPage;

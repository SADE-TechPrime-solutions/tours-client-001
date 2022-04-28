import React from "react";
import Heading from "../../Heading/Heading";
import HeroFE from "./Hero/Hero";
import Arrangement from "./Arrangements/Arrangement";
import Educational from "./Educational/Educational";
import Benefit from "./Benefits/Benefit";
import Footer from "./Footer/Footer";


import imgbg from "./../../../Assets/images/vac6.jpg";
import clientImg from './../../../Assets/images/Client-1.jpg';

const MountKenyaPage = () => {
  return (
    <div className="root">
      {/* hero */}
      <HeroFE
        backImg={imgbg}
        title="climb mount kenya in 6 days"
        description="mount kenya is a nice place to climb, betty botter bought a bit of bitter butter, but she thought, the butter's bitter, if I put the bitter batter in my batter, it will make my batter bitter, but a bit of better batter will make my batter better, so she bought a bit of butter, better than her bitter butter, put it in her bitter batter and her bitter batter was better."
      />
      {/* end of hero */}

      {/* arrangements and documentation */}
      <section className="arrangements-docuemtation__section">
        <div className="arrangements__container">
          <div className="arrangements">
            <Arrangement image={clientImg} title="calling the travellers" description="We make sure that we have called the travellers prior to the travelling so that they know what is going to happen and don't miss the tour." />
            <Arrangement image={clientImg} title="calling the travellers" description="We make sure that we have called the travellers prior to the travelling so that they know what is going to happen and don't miss the tour." />
            <Arrangement image={clientImg} title="calling the travellers" description="We make sure that we have called the travellers prior to the travelling so that they know what is going to happen and don't miss the tour." />
            <Arrangement image={clientImg} title="calling the travellers" description="We make sure that we have called the travellers prior to the travelling so that they know what is going to happen and don't miss the tour." />
          </div>
          <div className="arrangements__descritption">
            <Heading bgText="trip arrangements" mainHeading="how we plan for this trip" subHeading="trip arrangements" />
            <p className="arrangements__description--text">
              We make sure that the population is reasonable and then we make sure there is enough water adnd means of travelling. We then make sure we have called all the tourists some days before just to notify them of the tour.We make sure that the population is reasonable and then we make sure there is enough water adnd means of travelling. We then make sure we have called all the tourists some days before just to notify them of the tour.We make sure that the population is reasonable and then we make sure there is enough water adnd means of travelling. We then make sure we have called all the tourists some days before just to notify them of the tour.
            </p>
          </div>
        </div>
      </section>
      {/* end of arrangements and documentation */}
      

      {/* benefits */}
      <section className="fe-benefits">
            <Heading mainHeading="benefits of taking this trip" subHeading="benefits" bgText="benefits" />
          <div className="fe-benefits__container">
            <Benefit image={imgbg} title="discover the world" description="travel all around the world in fun" />
            <Benefit image={imgbg} title="discover the world" description="travel all around the world in fun" />
            <Benefit image={imgbg} title="discover the world" description="travel all around the world in fun" />
            <Benefit image={imgbg} title="discover the world" description="travel all around the world in fun" />
          </div>
      </section>
      {/* end of benefits */}
      <Educational />
      <Footer />
    </div>
  );
};

export default MountKenyaPage;
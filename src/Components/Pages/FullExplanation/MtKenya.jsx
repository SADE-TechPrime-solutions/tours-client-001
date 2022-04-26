import React from "react";
import Heading from "../../Heading/Heading";
import HeroFE from "./Hero/Hero";
import Educational from "./Educational/Educational";
import Benefit from "./Benefits/Benefit";
import imgbg from "./../../../Assets/images/vac6.jpg";

const MountKenyaPage = () => {
  return (
    <div className="root">
      <HeroFE
        backImg={imgbg}
        title="climb mount kenya in 6 days"
        description="mount kenya is a nice place to climb, betty botter bought a bit of bitter butter, but she thought, the butter's bitter, if I put the bitter batter in my batter, it will make my batter bitter, but a bit of better batter will make my batter better, so she bought a bit of butter, better than her bitter butter, put it in her bitter batter and her bitter batter was better."
      />
      <div className="fe-benefits">
            <Heading mainHeading="benefits of taking this trip" subHeading="benefits" bgText="benefits" />
          <div className="fe-benefits__container">
            <Benefit image={imgbg} title="discover the world" description="travel all around the world in fun" />
            <Benefit image={imgbg} title="discover the world" description="travel all around the world in fun" />
            <Benefit image={imgbg} title="discover the world" description="travel all around the world in fun" />
            <Benefit image={imgbg} title="discover the world" description="travel all around the world in fun" />
          </div>
      </div>
      <Educational />
    </div>
  );
};

export default MountKenyaPage;
import React from "react";
import Heading from "../Heading/Heading";
import mountKenya from "./../../Assets/images/client-images/mount-kenya.jpg";
import uhuruPeak from "./../../Assets/images/client-images/uhuru-peak.jpg";
import maasai from "./../../Assets/images/client-images/maasai.jpg";
import ruwenzori from "./../../Assets/images/client-images/ruwenzori.jpg";
import kps from "./../../Assets/images/client-images/kenyan-wildlife-photography.jpg";
import kenyanCoast from "./../../Assets/images/client-images/kenyan-coast.jpg";
import Tour from "./Tour";

const Tours = () => {
  // image, duration, zone, pricing
  const tours = [
    {
      image: mountKenya,
      duration: "5 days of trek",
      zone: "mount kenya",
      pricing: "",
      description:
        "A classic adventure on Mount Kenya which is not too long, although the summit day itself is challenging and at relatively high altitude. Expect quite a lot of wildlife and lots of secluded trails with bizarre flora and fauna.",
      link: '/mount-kenya'
    },
    {
      image: uhuruPeak,
      duration: "7 days of trek",
      zone: "mount kilimanjaro",
      pricing: "",
      description:
        "Rising majestically above the African plains, Mt. Kilimanjaro has beckoned to climbers since the first recorded summit in 1889.Nearly every climber who has summitted Uhuru Peak, the highest summit on Kibo’s crater rim, has recorded his or her thoughts about the accomplishment in a book stored in a wooden box at the top?",
        link: '/mount-kilimanjaro'
    },
    {
      image: maasai,
      duration: "8 days safari",
      zone: "nothern kenya",
      pricing: "",
      description:"Get off the trodden tourist tracks on this camping expedition to remote, isolated and wild parts of northern Kenya. Journey along rough African roads to picturesque Lake Turkana and the stark Chalbi Desert then lush Marsabit National Park and the game-rich Samburu National Reserve, travelling by 4x4 Land Cruiser or overland truck.",
      link: '/nothern-kenya'
    },
    {
      image: ruwenzori,
      duration: "6-7 days trek",
      zone: "mount ruwenzori",
      pricing: "",
      description:
        "The Rwenzori Mountains is one of the top destinations visited by travelers that wish to explore the snow-capped mountains within Africa. Trekking the green, mist-shrouded Rwenzori Mountains is like stepping into a wonderland. An incredible experience will stay with you for a lifetime when a person talks about the Rwenzoris",
        link: '/mount-ruwenzori'
    },
    {
      image: kps,
      duration: "6 days safari",
      zone: "kenyan photographic safaris",
      pricing: "",
      description:
        "Home to Africa’s most iconic parks, conservancies and game reserves, Kenya guarantees some of the most exotic, diverse and breathtaking wildlife you will ever see. From the famous Big Five to wild animals that can only be found in this part of the world, Kenya will not disappoint. When it comes to topography, Kenya has scenery that knows no bounds. It features an unrivaled land of diversity and contrast. From vast savannah plains, gorgeous mountains and intriguing woodlands to lush forests and hot deserts to turquoise seas, winding rivers and beautiful white sand beaches!",
        link: '/kenyan-photographic-safaris'
    },
    {
      image: kenyanCoast,
      duration: "5 days safari",
      zone: "kenyan coast",
      pricing: "",
      description: 
        "Any visitor to Kenya should consider visiting Mombasa during their holidays! This top destination for people who want to experience a tropical feel while in Africa. Mombasa provides the opportunity to enjoy incredible weather, the beautiful waters of the Indian Ocean, white sandy beaches, and the tastiest Kenyan food.",
      link: '/kenyan-coast'
    },
  ];
  return (
    <section className="tours" id="upcoming-tours">
      <Heading
        subHeading="the best of east africa"
        mainHeading="what we do best"
        bgText="read more"
      />
      <div className="tours__container">
        {tours.map((el, i) => (
          <Tour
            image={el.image}
            duration={el.duration}
            zone={el.zone}
            pricing={el.pricing}
            description={el.description}
            link={el.link}
            key={i}
          />
        ))}
      </div>
    </section>
  );
};

export default Tours;

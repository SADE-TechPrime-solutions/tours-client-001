import React from "react";
import Heading from "../Heading/Heading";
import tourImg1 from "./../../Assets/images/zone-4.jpg";
import tourImg2 from "./../../Assets/images/zone-1.jpg";
import tourImg3 from "./../../Assets/images/zone-2.jpg";
import tourImg4 from "./../../Assets/images/zone-3.jpg";
import tourImg5 from "./../../Assets/images/zone-5.jpg";
import tourImg6 from "./../../Assets/images/zone-6.jpg";
import Tour from "./Tour";

const Tours = () => {
  // image, duration, zone, pricing
  const tours = [
    {
      image: tourImg1,
      duration: "5 days of trek",
      zone: "mount kenya",
      pricing: "from $1000",
      description:
        "A classic adventure on Mount Kenya which is not too long, although the summit day itself is challenging and at relatively high altitude. Expect quite a lot of wildlife and lots of secluded trails with bizarre flora and fauna.",
      link: '/mount-kenya'
    },
    {
      image: tourImg2,
      duration: "7 days of trek",
      zone: "mount kilimanjaro",
      pricing: "from $1600",
      description:
        "Rising majestically above the African plains, Mt. Kilimanjaro has beckoned to climbers since the first recorded summit in 1889.Nearly every climber who has summitted Uhuru Peak, the highest summit on Kibo’s crater rim, has recorded his or her thoughts about the accomplishment in a book stored in a wooden box at the top?",
        link: '/mount-kilimanjaro'
    },
    {
      image: tourImg3,
      duration: "8 days safari",
      zone: "nothern kenya",
      pricing: "from $2600",
      description:"Get off the trodden tourist tracks on this camping expedition to remote, isolated and wild parts of northern Kenya. Journey along rough African roads to picturesque Lake Turkana and the stark Chalbi Desert then lush Marsabit National Park and the game-rich Samburu National Reserve, travelling by 4x4 Land Cruiser or overland truck.",
      link: '/mount-kenya'
    },
    {
      image: tourImg4,
      duration: "6-7 days trek",
      zone: "mount ruwenzori",
      pricing: "from $1900",
      description:
        "The Rwenzori Mountains is one of the top destinations visited by travelers that wish to explore the snow-capped mountains within Africa. Trekking the green, mist-shrouded Rwenzori Mountains is like stepping into a wonderland. An incredible experience will stay with you for a lifetime when a person talks about the Rwenzoris",
        link: '/mount-kenya'
    },
    {
      image: tourImg6,
      duration: "6 days safari",
      zone: "maasai mara",
      pricing: "from $1000",
      description:
        "The Maasai Mara requires no introduction. It is home to the wildebeest migration that takes place between it and the Serengeti every year. Other than the migration, the park is home to lions, buffalos, elephants, cheetahs, hippos, giraffes and hundreds of different animal species and birds. It is also one of the few places where you can do game drives and go for cultural tours in a Masai village.",
        link: '/mount-kenya'
    },
    {
      image: tourImg5,
      duration: "5 days safari",
      zone: "kenyan coast",
      pricing: "from $2000",
      description: 
        "Any visitor to Kenya should consider visiting Mombasa during their holidays! This top destination for people who want to experience a tropical feel while in Africa. Mombasa provides the opportunity to enjoy incredible weather, the beautiful waters of the Indian Ocean, white sandy beaches, and the tastiest Kenyan food.",
      link: '/mount-kenya'
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

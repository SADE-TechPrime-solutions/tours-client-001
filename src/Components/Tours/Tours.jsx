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
      duration: "5 days trip",
      zone: "mount kenya",
      pricing: "from $1000",
      description:
        "A classic adventure on Mount Kenya which is not too long, although the summit day itself is challenging and at relatively high altitude. Expect quite a lot of wildlife and lots of secluded trails with bizarre flora and fauna.",
    },
    {
      image: tourImg2,
      duration: "7 days hike",
      zone: "mount kilimanjaro",
      pricing: "from $1600",
      description:
        "Rising majestically above the African plains, Mt. Kilimanjaro has beckoned to climbers since the first recorded summit in 1889.Nearly every climber who has summitted Uhuru Peak, the highest summit on Kibo’s crater rim, has recorded his or her thoughts about the accomplishment in a book stored in a wooden box at the top?",
    },
    {
      image: tourImg3,
      duration: "6 days trip",
      zone: "nothern kenya special",
      pricing: "from $2600",
      description:
        "",
    },
    {
      image: tourImg4,
      duration: "22 september - 30 september 2022",
      zone: "l. victoria",
      pricing: "from $15",
      description:
        "we explore the luo land in kenya as we swim in lake victoria. The museum probably will be the best place you will visit here.",
    },
    {
      image: tourImg6,
      duration: "20 october 2022 - 1 november 2022",
      zone: "l. nakuru",
      pricing: "from $20",
      description:
        "If you have never seen flamingoes, then this is an opportunity that you don't want to waste, Lake Nakuru national park is where we will spend most of our time here.",
    },
    {
      image: tourImg5,
      duration: "18 december 2022 - 3 january 2023",
      zone: "mombasa",
      pricing: "from $300",
      description:
        "of course, no touring year can be complete if you fail to visit the coastal beach of Kenya known as Mombasa, let's explore the salty water and have more fun.",
    },
  ];
  return (
    <section className="tours" id="upcoming-tours">
      <Heading
        subHeading="our tours"
        mainHeading="see incoming tours"
        bgText="book a tour"
      />
      <div className="tours__container">
        {tours.map((el, i) => (
          <Tour
            image={el.image}
            duration={el.duration}
            zone={el.zone}
            pricing={el.pricing}
            description={el.description}
            key={i}
          />
        ))}
      </div>
    </section>
  );
};

export default Tours;

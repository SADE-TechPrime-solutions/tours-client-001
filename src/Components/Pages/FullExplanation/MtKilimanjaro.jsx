import React, { useState, useEffect } from "react";
import Heading from "../../Heading/Heading";
import HeroFE from "./Hero/Hero";
import Arrangement from "./Arrangements/Arrangement";
import Educational from "./Educational/Educational";
import Benefit from "./Benefits/Benefit";
import Footer from "./Footer/Footer";

import imgbg from "./../../../Assets/images/vac6.jpg";
import imgbg2 from "./../../../Assets/images/bgh1.jpg";
import clientImg from "./../../../Assets/images/Client-1.jpg";

import LoaderAnimation from "../../Loader/LoaderAnimation";

const MountKilimanjaroPage = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);
  const arrayOfTodos = [
    "make sure you do this when you get there, it will always come in handy and make everything nice in the long run",
    "make sure you do this when you get there, it will always come in handy and make everything nice in the long run",
    "make sure you do this when you get there, it will always come in handy and make everything nice in the long run",
  ];
  return (
    <div className="root">
      {loading ? (
        <LoaderAnimation />
      ) : (
        <>
          // {/* hero */}
          <HeroFE
            backImg={imgbg}
            title="climb mount Kilimanjaro in 10 days"
            description="Experience beautiful landscapes and spectacular mountain views on this 5-day Mt Kenya climb along the Chogoria Route. From gentle hikes to steep ascents, this route will lead you through fairy forests and moorlands, passing high waterfalls and gurgling streams. Make sure to look for elephants, buffaloes, and antelopes in the lower mountain region."
          />
          // {/* end of hero */}
          {/* arrangements and documentation */}
          <section className="arrangements-docuemtation__section">
            <div className="arrangements__container">
              <div className="arrangements">
                <Arrangement
                  image={clientImg}
                  title="calling the travellers"
                  description="We make sure that we have called the travellers prior to the travelling so that they know what is going to happen and don't miss the tour."
                />
                <Arrangement
                  image={clientImg}
                  title="calling the travellers"
                  description="We make sure that we have called the travellers prior to the travelling so that they know what is going to happen and don't miss the tour."
                />
                <Arrangement
                  image={clientImg}
                  title="calling the travellers"
                  description="We make sure that we have called the travellers prior to the travelling so that they know what is going to happen and don't miss the tour."
                />
                <Arrangement
                  image={clientImg}
                  title="calling the travellers"
                  description="We make sure that we have called the travellers prior to the travelling so that they know what is going to happen and don't miss the tour."
                />
              </div>
              <div className="arrangements__descritption">
                <Heading
                  bgText="trip arrangements"
                  mainHeading="how we plan for this trip"
                  subHeading="trip arrangements"
                />
                <p className="arrangements__description--text">
                  <strong>The second-highest mountain in Africa</strong>,
                  preparing to climb Mount Kenya is a serious undertaking. You
                  don't have to be an experienced mountaineer though thanks to
                  its choice of trails and expert guides. Hiking this peak isn't
                  a walk in the park, but where else can you get rainforest,
                  alpine landscape, and phenomenal views all in one place? Mount
                  Kenya has three main peaks and the two larger peaks of Batian
                  (5199m) and Nelion (5188m) are both technical climbs, however
                  the third peak, Point Lenana (4,985m) is a trekking peak and
                  although it is definitely a challenge and if you're new to
                  trekking, camping and altitude then you may well struggle,
                  however with the correct preparation and a good guide team,
                  then the vast majority of people will successfully summit.{" "}
                  <strong>
                    <em>When is the best time to climb Mount Kenya</em>
                  </strong>
                  ,is a question we get asked a lot, the reality is that it can
                  be climbed all year round, though if you don't fancy trekking
                  in the rainy seasons it's better to avoid mid-March to mid-May
                  and October and November but it's getting increasingly
                  difficult to predict the rains so if you have no alternative
                  but to climb in these months then don't let the rains hold you
                  back, the rain tends to fall after lunch on the mountain so a
                  lot of the time we can avoid trekking in heavy rain. Whether
                  you are an experienced expeditioner or a novice hiker, there
                  is a peak for you on Mount Kenya: you can reach Point Lenana
                  at 4985m even if you don't have climbing experience. The
                  snow-capped peak of Batian at 5199m on the other hand is
                  reserved for those with technical finesse and an appetite for
                  adventure. No worries, at wilderness Alternative we will walk
                  with you and have your back: You won t get lost thanks to our
                  professional guides who will lead the way. You will be
                  comfortable thanks to our high-quality camping gear and
                  experienced crew. You will get the strength you need thanks to
                  our mountain-chefs cooking up a storm for breakfast, lunch and
                  dinner. We have climbed Mount Kenya via different routes and
                  specialise in treks to Point Lenana and the technical climb to
                  Batian peak and and nelion
                </p>
              </div>
            </div>
          </section>
          {/* end of arrangements and documentation */}
          {/* benefits */}
          <section className="fe-benefits">
            <Heading
              mainHeading="mount kenya climbing routes"
              subHeading="all mount kenya routes"
              bgText="routes"
            />
            <div className="fe-benefits__container">
              <Benefit
                image={imgbg}
                title="chogoria sirimon route"
                description="Chogoria to Sirimon is the most scenic transverse of the Mt Kenya routes. The perfect combination with multiple high altitude lakes, where you can do fly fishing of brown trout fish, forest vegetation, and waterfalls to behold. Accommodation is camping in tent."
              />
              <Benefit
                image={imgbg}
                title="sirimon route"
                description="The Sirimon Route is accesseed via the North West corner of the mountain here. The rout is usually considered one of the easire routes as it climbs rlatively gradually only a couple of steeper sections to reach the top camp. It is also currently the most popular route, though it is by no means busy."
              />
              <Benefit
                image={imgbg}
                title="naro moru"
                description="This route used to be by far the most popular route as it is relatively short and has huts at Met Station (3050m) and MacKinders (4200m). However, it has been overtaken by the Sirimon route as the most popular.The forest is still dense on this route, as is the bamboo zone. You are quite likely to see bushbuck, Colobus monkey and Sykes Monkey and also evidence of Buffalo and Elephant."
              />
              <Benefit
                image={imgbg}
                title="chogoria-sirimon route"
                description="The Chogoria-sirimon route is our recommended and arguably the most magnificent ascent route to the summit area. It is the driest route up the mountain and the walk beside the Gorges Valley is truly spectacular.
                The descent by the Sirimon route takes one through some beautiful forest tracks and completes the traverse of the mountain"
              />
            </div>
          </section>
          {/* end of benefits */}
          <Educational
            image={imgbg2}
            todoText="Mount Kenya has three main peaks and the two larger peaks of Batian (5199m) and Nelion (5188m) are both technical climbs, however the third peak, Point Lenana (4,985m) is a trekking peak and although it is definitely a challenge and if you’re new to trekking, camping and altitude then you may well struggle, however with the correct preparation and a good guide team, then the vast majority of people will successfully summit.

Wilderness  Alternative Expendation runs trips of different types on Mount Kenya. The general format is one where you carry virtually all of your own equipment in a true expedition style. In this situation, we will take only a handful of porters who will be available to carry items in an emergency and to act as additional support to the mountain guides. In this format, you will be carrying tents, sleeping bags & mats, food and personal clothing. This may add up to 10-15kg at first until you have eaten some of the food. Carrying all your own gear can be a tiring experience but it can greatly enhance the experience and the sense of achievement. We will keep the amount of equipment that we carry to an absolute (safe) minimum.


In a second trip format, we can arrange to use porters to carry more of the gear. When using porters they will carry the bags and the gear and the food, but you will be expected to carry a day sack with some of your own personal equipment which you need for the day such as water, spare clothes, camera and waterproofs. This is normally about 4 or 5 kilogrammes. Every person will have their own porter carrying their bag so nothing ever gets lost. We do not allow porters to carry more than 20kgs so please do not overfill your bags. They often carry bags on their heads, even rucksacks. We will also put your bags in waterproof sacks in case of rain.

How to keep dry and warm on Mount Kenya. 
There is little doubt that you will have some rain, and it is likely to be in the lower regions around the montane or forest level. Waterproofs are necessary; remember that on the equator the rainy season is traditionally April and September/October, so if you will be trekking  with us during this period Expect short-term extreme conditions, i.e. sharp showers of rain, hot sun, gusts of wind, snow and low night temperatures. Clear nights will be colder but more beautiful, and generally, the cloud builds up mid-morning, only to dissipate again with the setting sun. Up higher it will be colder and windier so the shell jacket is really vital; temperatures can drop dramatically, and there may be snow. Summit morning can be icy underfoot, and very cold (minus 10°C) so good boots with hats and gloves are important. Work on a ‘wet and dry’ system so that if your T-shirt gets wet during the day, you always have a dry T-shirt and warm top to change into the moment you get to camp. This is really important for morale if nothing else. We don't let people keep wet clothes on. It's such an obvious point but commonly ignored.

What is the daily routine while climbing  Mount Kenya? 

Generally, breakfast is between 7.30am and 8.00am, and departure from camp is at 9.00am. There is a lunch at midday, tea and biscuits around 4 pm and dinner at 7 pm. Summit morning is different; tea and biscuits at 11.30pm and start hiking at midnight or sometimes 1 am depending on the pace of hikers 

When trekking with wilderness Alternative thepace is slow and not forced at all. There is a rest at least once every hour and plenty of time to take photos, enjoy the view and chat. When you arrive at the huts you will find your bags ready to collect. In the morning please have your bags packed before breakfast.

How to tip porters on Mount Kenya? 
Wulderness Alternative  is proud to pay excellent salaries. We also  also fulfil and exceed the International Porter Protection Group (IPPG) guidelines on porter safety. So tipping should be from your own good will.
 
 What is the Cost Of Climbing Mount Kenya ? 

The Mount Kenya  trek cost , the second depends on a few factors i.e The number of people  trekking in the group, the route used and the number of days spent on the mountain. Please  feel free to talk to us regarding  the cost and don't forget their is always a trek for everyone"
          />
          <Footer />
        </>
      )}
    </div>
  );
};

export default MountKilimanjaroPage;

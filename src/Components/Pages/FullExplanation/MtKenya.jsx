import React, { useState, useEffect } from "react";

import Heading from "../../Heading/Heading";
import HeroFE from "./Hero/Hero";
import Benefit from "./Benefits/Benefit";
import RouteDetails from "./RouteDetails/RouteDetails";
import Image from "./Image/Image";
import Footer from "./Footer/Footer";

// images importing
// chogoria-route-via-mintos-camp
import imgbg from "./../../../Assets/images/vac6.jpg";
import lakeMichaelson from "./../../../Assets/images/client-images/lake-michaelson-on-mount-kenya.jpg";
import vegetation from "./../../../Assets/images/client-images/mount-kenya-vegetation.jpg";
import sunrise from "./../../../Assets/images/client-images/sunrise-on-lake-michaelson.jpg";
import technicalClimg from "./../../../Assets/images/client-images/technical-climb-on-mount-kenya.jpg";

import austrianHut from "./../../../Assets/images/client-images/Austrian-hut-camping-on-narumoru-route.jpeg";
import shiptons from "./../../../Assets/images/client-images/the-trek-to-shiptons-camp-via-sirimon-route.jpeg";
import georgesValley from "./../../../Assets/images/client-images/the-view-of-the-gorges-valley-on-chogoria-route.jpeg";
import chogoriaRouteViaMentosCamp from "./../../../Assets/images/client-images/chogoria-route-via-mintos-camp.jpeg";

import LoaderAnimation from "../../Loader/LoaderAnimation";

const MountKenyaPage = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <div className="root">
      {loading ? (
        <LoaderAnimation />
      ) : (
        <>
          // {/* hero */}
          <HeroFE
            backImg={imgbg}
            title="climb mount kenya via chogoria route in 5 days"
            description="Experience beautiful landscapes and spectacular mountain views on this 5-day Mt Kenya climb along the Chogoria Route. From gentle hikes to steep ascents, this route will lead you through fairy forests and moorlands, passing high waterfalls and gurgling streams. Make sure to look for elephants, buffaloes, and antelopes in the lower mountain region."
          />
          // {/* end of hero */}
          {/* arrangements and documentation */}
          <section className="arrangements-docuemtation__section">
            <div className="arrangements__container">
              <div className="arrangements__descritption">
                <Heading
                  bgText="trip arrangements"
                  mainHeading="how we plan for this trip"
                  subHeading="trip arrangements"
                />
                <h4 className="educational__subtitle">background information</h4>
                <p className="arrangements__description--text">
                  Mount Kenya is the less climbed cousin of Mount Kilimanjaro
                  nearby in Tanzania, however many people prefer the wilderness,
                  abundant wildlife and stunning mountain lakes that you find on
                  Mount Kenya. Point Lenana at 4985m metres is a feasible
                  trekking peak and also currently the worlds highest via
                  ferrata summit route, which adds to the challenge and
                  enjoyment. The panoramic views of the jagged volcanic peaks,
                  wide valleys and surrounding savannah makes a trek on this
                  mountain a thoroughly enjoyable African experience.
                </p>
                <p className="arrangements__description--text">
                  To climb to Point Lenana on Mount Kenya you don't need to be a
                  super-fit athlete or experienced mountaineer. The trek is
                  accessible to anyone with good basic fitness and an enthusiasm
                  for the outdoors. It will be an advantage to have good
                  previous hill-walking experience and therefore be familiar
                  with walking in the countryside for many hours at a time and
                  there is no doubt that using Chogoria route on the ascent or
                  descent is a more challenging option than the likes of Sirimon
                  or Naro Moru.
                </p>
                <p className="arrangements__description--text">
                  Therefore we do advise that on the lead up to the trip you do
                  spend time checking and working on the kind of fitness that
                  you need for the trek. The ideal preparation is spending a
                  good number of hours walking on rolling terrain with a small
                  pack of about 5kg on your back. Other forms of cardio-vascular
                  exercise such as running, cycling and swimming will also of
                  course help with the right kinds of fitness, though especially
                  if they focus mainly on the legs.
                </p>

                <p className="arrangements__description--text">
                  Higher up, the heathland thins and the way is over more bare,
                  rocky tracks following ridges and rivers to reach the 2nd
                  camp. From here you are up close and personal with the jagged
                  rocky peaks and remaining glaciers which feed numerous small
                  lakes and tarns dotted around the peaks. Summiting Mount Kenya
                  will involve tackling a scree slope before the summit
                  attempt. 
                </p>
                <p className="arrangements__description--text">
                  <h4 className="educational__subtitle">How to keep dry and warm on Mount Kenya ? </h4>
                  There is little doubt that in most cases you will have some rain, and it is likely to be in
                  the lower regions around the montane or forest level.
                  Waterproofs are necessary; remember that on the equator the
                  rainy season is traditionally April and September/October.
                  Expect short-term extreme conditions, i.e. sharp showers of
                  rain, hot sun, gusts of wind, snow and low night temperatures.
                  Clear nights will be colder but more beautiful, and generally,
                  the cloud builds up mid-morning, only to dissipate again with
                  the setting sun.  Up higher it will be colder and windier so
                  the shell jacket is really vital; temperatures can drop
                  dramatically, and there may be snow. Summit morning can be icy
                  underfoot, and very cold (minus 10°C) so good boots with hats
                  and gloves are important. Work on a ‘wet and dry’ system so
                  that if your T-shirt gets wet during the day, you always have
                  a dry T-shirt and warm top to change into the moment you get
                  to camp. This is really important for morale if nothing else.
                  Don't let people keep wet clothes on. It's such an obvious
                  point but commonly ignored.
                </p>

                <p className="arrangements__description--text">
                <h4 className="educational__subtitle">Whats Is the daily routine on Mount Kenya?</h4> 
                 Generally,
                  breakfast is between 7.30am and 8.00am, and departure from
                  camp is at 9.00am. There is a lunch at midday, tea and
                  biscuits around 4 pm and dinner at 7 pm. Summit morning is
                  different; tea and biscuits at 11.30pm and start hiking at
                  midnight or sometimes 1 am depending on the pace of hikers 
                  The pace is slow and not forced at all. There is a rest at
                  least once every hour and plenty of time to take photos, enjoy
                  the view and chat. When you arrive at the huts you will find
                  your bags ready to collect. In the morning please have your
                  bags packed before breakfast.
                </p>

                <p className="arrangements__description--text">
                  TIPS Wilderness Alternative Expedition is proud to pay
                  excellent salaries. I'm also a members of the Kilimanjaro
                  Porters Assistance Project, the Ethical Tour Operators Group
                  and the AITO Sustainable Tourism Committee. I also fulfil and
                  exceed the International Porter Protection Group (IPPG)
                  guidelines on porter safety. So tipping should be from your
                  own good will.
                </p>

                <p className="arrangements__description--text">
                  <h4 className="educational__subtitle">Charges</h4> 
                  The trek price, the trek price depends on a few
                  factors ie The number of people  trekking in the group, the
                  route used and the number of days spent on the mountain.
                </p>
              </div>
            </div>
          </section>
          {/* end of arrangements and documentation */}
          {/* benefits */}
          <section className="fe-benefits">
            <Heading
              mainHeading="most popular mount kenya trekking routes"
              subHeading="wilderness alternatives mount kenyat treking routes"
              bgText="routes"
            />
            <div className="fe-benefits__container">
              <Benefit
                image={georgesValley}
                title="chogoria sirimon route"
                description="Chogoria to Sirimon is the most scenic transverse of the Mt Kenya routes. The perfect combination with multiple high altitude lakes, where you can do fly fishing of brown trout fish, forest vegetation, and waterfalls to behold. Accommodation is camping in tent."
              />
              <Benefit
                image={shiptons}
                title="sirimon route"
                description="The Sirimon Route is accesseed via the North West corner of the mountain here. The rout is usually considered one of the easire routes as it climbs rlatively gradually only a couple of steeper sections to reach the top camp. It is also currently the most popular route, though it is by no means busy."
              />
              <Benefit
                image={austrianHut}
                title="naro moru"
                description="This route used to be by far the most popular route as it is relatively short and has huts at Met Station (3050m) and MacKinders (4200m). However, it has been overtaken by the Sirimon route as the most popular.The forest is still dense on this route, as is the bamboo zone. You are quite likely to see bushbuck, Colobus monkey and Sykes Monkey and also evidence of Buffalo and Elephant."
              />
              <Benefit
                image={chogoriaRouteViaMentosCamp}
                title="chogoria route"
                description="The Chogoria-sirimon route is our recommended and arguably the most magnificent ascent route to the summit area. It is the driest route up the mountain and the walk beside the Gorges Valley is truly spectacular.
                The descent by the Sirimon route takes one through some beautiful forest tracks and completes the traverse of the mountain"
              />
            </div>
          </section>
          {/* end of benefits */}
          <section className="route-details__section">
            <RouteDetails
              title="Sirimon  route "
              description="The route is usually considered one of the easier routes as it climbs relatively gradually with only a couple of steeper sections to reach the top camp. The Sirimon Route is an accessible and enjoyable hiking route on Mount Kenya and well within the capabilities of fit hill walkers, offering a varied trek from the cultivated lowlands, through unique glacier-sculpted alpine heath and up to jagged volcanic peaks and glistening glaciers near. The forest is relatively sparse on this route and the bamboo zone is not really evident due to this year fire.  Most of the second day is spent in the alpine heath and moorland. Crossing the ridge into the MacKinder Valley is a good viewpoint if it is clear and the approach to the peaks along the classic U-shaped MacKinder Valley can be spectacular in clear conditions. The MacKinder Valley shows quite a lot of the giant Lobelia and Groundsel which are the classic Mt Kenya Flora. You are also quite likely to see Rock Hyrax at Shipton's cave or hut.The following is our preferred itinerary to give a good overview of the Sirimon route and also to promote good acclimatisation to give an excellent chance of achieving a successful summit.
              Day:1Transfer from Nairobi to Mount Kenya National Park Gate. Trek to Old Moses Camp

               Day 2.Trek from Old Moses Camp to Shiptons Camp.

              Day 3 Acclimatisation day:Trek from Shiptons Camp to Hausberg Col and return to Shiptons Camp.

              4.Trek from Shiptons to Point Lenana and descend to Old Moses Camp. Be picked up at Old Moses and be transferred  to Nyanyuki spend the night at Nyanyuki."
            />

            <Image
              image={vegetation}
              altText="mount kenya, the land of giant shrubs and weeds (giant lobelia)"
              caption="mount kenya, the land of giant shrubs and weeds (giant lobelia)"
            />

            <RouteDetails
              title="chogoria sirimon route"
              description="Chogoria sirimon Route Experience beautiful landscapes and spectacular mountain views on this 5-day Mt Kenya climb along the Chogoria Route. From gentle hikes to  steep ascents, this route will lead you through fairy forests and moorlands, passing high waterfalls and gurgling streams. Make sure to look for elephants, buffaloes, and antelopes in the lower mountain region. You spend one night at beautiful Lake Ellis and have view of Lake Michaelson from Mintos Camp. Your return leads through the wide Mackinder’s Valley along the Sirimon Route. Our experienced crew will lead the way and ensure you not only get to the top, but safely back down again.The physical landscape on this route is its biggest attraction. Whereas the other routes above generally follow a U-Shaped glacial valley for much of the way, the Chogoria traverses around the head of the spectacular 'Temple' with the Hall Tarns perched on the rock ledge above it and Lake Michaelson in the base of the amphitheatre. The additional features of Lake Ellis, the Giant's Billiard Table and the Nithi Falls further add to its interest. The Chogoria is very often used as a descent route after ascending one of the other routes"
            />

            <Image
              image={lakeMichaelson}
              altText="The view of lake michaelson on chogoria route"
              caption="the view of lake michalson on chogoria route"
            />

            <RouteDetails
              title="Naro moru route"
              description="The Naro Moru Route approaches from the West and KWS have a National Park Gate there and also their main headquarters for the mountain. There is accommodation available here also. This route used to be by far the most popular route as it is relatively short and has huts at Met Station (3050m) and MacKinders (4200m). However, it has been overtaken by the Sirimon route as the most popular. The huts are good at both locations and they also have camping space The forest is still dense on this route, as is the bamboo zone. You are quite likely to see bushbuck, Colobus monkey and Sykes Monkey and also evidence of Buffalo and Elephant. The hygenia forest is also in good condition with a lot of flowers and other plants. The giant heathers above the forest were heavily damaged by a fire in 2013 but the alpine moorland has a lot of Giant Lobelia as well as MacKinders Gladiolus higher up. The Teleki Valley has a lot of the classic Tree and Cabbage Groundsels as well as Lobelia Telekii and Deckenii. Some of the cabbage groundsels in particular absolutely massive. On the approach to or at MacKinders you are almost guaranteed to see Rock Hyrax."
            />

            <Image
              image={technicalClimg}
              altText="The view of the south face of Nelion and Batian normal route"
              caption="The view of the south face of Nelion and Batian normal route"
            />

            <RouteDetails
              title="Timau Route"
              description="The Timau Route approaches from the North from near the village of Timau. It used to be a popular route for ascending in a 4x4 as it follows a meandering route through the gentler northern slopes until they steepen at around 4200m. From here it drops abruptly into and across the Hinde Valley and the Nithi North river before climbing up to meet the Chogoria Route at Hall Tarns. Conditions vary on the route but vehicles generally do not ascend above about 3400m. It is still theoretically possible to climb via this route, though specific advice would need to be sought from the KWS Rangers regarding current conditions."
            />

            <Image
              image={sunrise}
              altText="sunrise on lake michaelson"
              caption="sunrise on lake michaelson"
            />

            <RouteDetails
              title="Kamweti Route"
              description="The Kamweti Route approaches from the south by first driving up from the village of Kutus to the Forest Castle Lodge in the forest zone. You can begin the trek at the lodge or drive a further 6km up to the Kamweti Forest Station at around 2600m. From here it is as much a case of making a track as following one for around 6km through the bamboo and giant heather before emerging out onto a ridge and along to the head of the Kiringa river where it flows out of a large bowl in the mountainside. The next 10km or so sees the heath thin out as the trail reaches a feature known as The Scoop, at the end of a long ridge leading to the peaks. From here the route options are to follow the ridge along to Austrian Hut via Tilman Peak or to traverse West round to MacKinders Hut via lake Hohnel."
            />
          </section>
          <Footer />
        </>
      )}
    </div>
  );
};

export default MountKenyaPage;

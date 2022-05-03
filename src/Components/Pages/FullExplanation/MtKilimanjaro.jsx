import React, { useState, useEffect } from "react";
import Heading from "../../Heading/Heading";
import HeroFE from "./Hero/Hero";
import RouteDetails from "./RouteDetails/RouteDetails";
import Image from "./Image/Image";
import Footer from "./Footer/Footer";

import imgbg from "./../../../Assets/images/client-images/kilimanjaro-bg.jpg";
import orchids from "./../../../Assets/images/client-images/pay-attention-to-orchids-at-rongai-route.jpg";
import machameImg from "./../../../Assets/images/client-images/how-sections-of-the-Machame-route-look-ike-scenes-from-Lord-of-the-rings.jpg";
import umbweImg from "./../../../Assets/images/client-images/umbwe-entry-point.jpg";
import maranguImg from "./../../../Assets/images/client-images/marangu-route-starting-point.jpg";

import LoaderAnimation from "../../Loader/LoaderAnimation";

const MountKilimanjaroPage = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
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
            title="climb mount Kilimanjaro in 10 days"
            description="As the popularity of climbing Mount Kilimanjaro continues to increase, potential climbers are often uncertain as to which route to take. This site will explain the differences between the routes and help you decide which is the best for you. At 5,895 meters (19,341 feet) Mount Kilimanjaro is the highest mountain in Africa and the tallest freestanding mountain in the world; it is one of the Seven Summits. The snow-capped peak of Africa is a dormant volcano and can be found inside the Kilimanjaro National Park of Tanzania."
          />
          // {/* end of hero */}
          {/* arrangements and documentation */}
          <section className="arrangements-docuemtation__section">
            <div className="arrangements__container">
              <div className="arrangements__descritption">
                <Heading
                  bgText="trip arrangements"
                  mainHeading="preparing for mount Kilimanjaro"
                  subHeading="trip arrangements"
                />
                <h4 className="educational__subtitle">
                  Background Information
                </h4>
                <p className="arrangements__description--text">
                  Some 30,000 people climb Kilimanjaro every year, making it one
                  of Africa’s most popular attractions. And as Africa’s highest
                  peak and one of the fabled Seven Summits, the summit is also
                  one of the most challenging attractions to reach! Tanzania’s
                  iconic mountain stands at 5895 metres but despite its
                  intimidating size, conquering it is entirely feasible if
                  you’ve got a good level of fitness and a decent amount of
                  determination. To climb up Kilimanjaro, you’ll need both
                  physical and mental strength, but that rewarding feeling and
                  sense of achievement at the top will be completely worth it.{" "}
                </p>

                <h4 className="educational__subtitle">
                  Train for hiking on Mount Kilimanjaro
                </h4>
                <p className="arrangements__description--text">
                  Making sure you're physically fit for Kilimanjaro will make
                  the whole experience more enjoyable. Good cardiovascular
                  health will give you stronger lungs, so regular runs, bike
                  rides or gym classes in the months prior to your trek will
                  really help. It's also good to use strength training to
                  prepare, so using weights and doing core exercises such as
                  planks, squats and lunges will strengthen your legs for
                  hiking.
                </p>
                <p className="arrangements__description--text">
                  The best way to prepare for the trek itself  is through plenty
                  of long walks. Doing regular 4-6 hour walks in the boots
                  you'll be wearing (to avoid blisters when you're on
                  Kilimanjaro) and with your backpack filled with the snacks
                  you'll eat on the mountain; this will help you to get used to
                  the time on your feet and which foods you prefer to eat while
                  hiking. In the few months before your climb you should aim to
                  do one of these walks at least every two to three weeks; more
                  if you can fit them in.
                </p>

                <h4 className="educational__subtitle">
                  What to carry on your Kilimanjaro trek
                </h4>
                <p className="arrangements__description--text">
                  Aside from carrying waterproofs while you're walking, it's
                  also a good idea to take plenty of water. The Water-to-Go
                  filtration bottles are great for hiking because you don't need
                  to use chlorine tablets - simply fill and go. Take
                  additional traditional water bottles to fill them up
                  from throughout the trekking day. Our top tip is to separate
                  your items into dry bags  so you can find everything you need
                  quickly and protect it further from the elements (plastic bags
                  are now banned in Tanzania so don't use them to separate
                  items). It's best to keep weight to a minimum but a basic
                  first aid kit, your camera (or phone), a power bank (as there
                  will be no power points on Kilimanjaro), spare socks (trust us
                  on this!) and spare batteries are all good essentials.
                </p>

                <h4 className="educational__subtitle">
                  What is the best time to climb kilimanjaro?
                </h4>
                <p className="arrangements__description--text">
                  Our trips run from July through to October and from the end of
                  December to February to avoid the main rainy seasons;
                  however it can still rain at any time on Kilimanjaro, and at
                  the higher altitudes this may fall as snow. It's generally
                  warmest in January and February and driest between August and
                  October.   Quite often trekkers will take the night sky into
                  consideration when choosing their trip. If you trek during a
                  full moon you have the best chance for a well-lit path to the
                  top (weather permitting) but the stars will be dimmer; for
                  those looking for spectacular stars, climbing during a new
                  moon will give you an incredible night-sky but less light. As
                  the world's highest free-standing mountain, this will be one
                  of the few places on Earth to see the night sky so clearly
                  without obstacles on the horizon.
                </p>
                <h4 className="educational__subtitle">
                  Always prepare mentally for altitude
                </h4>
                <p className="arrangements__description--text">
                  People that have climbed Kilimanjaro will tell you that the
                  majority of walking is on decent terrain and not too steep.
                  However the trek to the summit is undoubtedly the hardest -
                  much of the terrain underfoot is scree (although it is frozen
                  for the ascent, which helps - this is part of the reason the
                  trek is done at night) and visibility is low until the sun
                  rises, but the toughest part is the altitude. With wilderness
                  Alternative Expedition  You'll ascend the mountain slowly and
                  acclimatise well, giving you the best possible chance of
                  summit success. All our trek leaders are trained in high
                  altitude first aid and know the signs to look out for when
                  Acute Mountain Sickness (AMS) may become more serious. In
                  addition, all trek teams carry oxygen canisters and a portable
                  hyberbaric (pressure) bag on the mountain for emergency use.
                  The main trick is to take your time, go slowly and listen to
                  your body - the guides will remind you to go "Pole, pole",
                  meaning "slowly, slowly"
                </p>
              </div>
            </div>
          </section>
          {/* end of arrangements and documentation */}
          <section className="educational-section">
            <h2 className="educational__title">
              mount kilimanjaro climbing routes
            </h2>
            <p className="background__information route-detail__description">
              There are seven established routes to climb Mount Kilimanjaro -
              Marangu, Machame, Lemosho, Shira, Rongai, Northern Circuit and
              Umbwe. The Marangu, Machame, and Umbwe routes all approach from
              the south of the mountain (Mweka is used only for descent). The
              Lemosho, Shira and Northern Circuit routes approach from the west.
              Selecting a route is a tough choice for most. To find the best
              Kilimanjaro route for you, considerations should be taken for the
              route's scenery, difficulty, foot traffic and its altitude
              acclimatization characteristics, as depicted in the description
              below
              <strong>
                some of the wilderness alternative recommended routes are:
              </strong>
            </p>
            <RouteDetails
              title="machame"
              description="The Machame route on Kilimanjaro is a seven day camping route which allows for excellent acclimatisation and particularly diverse scenery. It has been called the Whiskey route in the past and nowadays about 35% of all climbers on the mountain use it.In a matter of days you will climb Kilimanjaro from the equator up to an Arctic zone, moving through grasslands, tropical rainforest, alpine meadows, moorlands and high desert to snow and ice. Each day on this route presents quite a distinct ecosystem to experience, which is one reason it is so popular. The entire climb up and down is approximately 62 km/ 37 miles from gate to gate. The height gain from the gate to the summit is 4157 metres, which is ascended over six days of around 5-7 days walking each day.From the start you will be speaking with experienced people who have climbed Kilimanjaro many times, including Kenny who has been leading groups on the mountain regularly  and is always on hand for advice. We can give you an honest appraisal of the climb, about training for the mountain what clothing and equipment you will need to buy or rent . The camps for the seven day Machame route are Machame, Shira, Barranco, Karanga Valley, Barafu and Millennium (or sometimes Mweka). Please talk to one of our specialists on WhatsApp to learn  more about  this route."
            />

            <Image
              image={machameImg}
              altText="How section of Machame route looks like scenes from Lords of the Rings."
              caption="How section of Machame route looks like scenes from Lords of Rings."
            />

            <RouteDetails
              title="marangu route"
              description="The Marangu Route is the oldest and most well established trekking route on Mount  Kilimanjaro, and it remains extremely popular, despite a wide variety of other options becoming available.This path provides trekkers with the classic Kilimanjaro climbing experience, offering sweeping views and a wonderful hiking adventure all the way to the summit of Uhuru Peak. That said, it also has some unique aspects that set it apart from any of the other routes as well, giving Marangu route a character and feeling that is entirely its own.One of the more interesting aspects of Marangu Route is that it is the only route up Mount Kilimanjaro that doesn’t allow camping, so instead of sleeping in tents, trekkers stay in permanent huts instead.These dormitory-style shelters provide extra protection from the wind and rain, which makes this route a popular one for travelers climbing during the rainy season, which comes in April and May. There are 60 bunk beds each at Mandara and Kibo Huts, and 120 bunk beds at Horombo HutWhile staying at those huts, trekkers will sleep in bunk beds equipped with a simple mattress and pillow. They’ll also be able to purchase an array of candy bars, bottled water, and soft drinks, which is why Marangu route is often referred to as the “Coca-Cola Route.”Because it is one of the shortest treks to the summit – requiring just five days to reach uhuru peak – the Marangu Route is a popular one with trekkers who have a limited amount of time for their climb. The exact distance on the Marangu Route is 82km or 50 miles. The shortest number of days required for the Marangu Route is 5 days, however, when you take into consideration the arrival and departure days, it is 9-10 days. As the Marangu Route is the shortest route on the mountain, it is best to complete the journey over 6 days to increase your chances of success."
            />

            <Image
              image={maranguImg}
              altText="marangu route starting point"
              caption="marangu route starting point"
            />

            <RouteDetails
              title="LEMOSHO ROUTE: HIGHLY RECOMMENDED"
              description="Lemosho is a relatively new route and it was designed to absorb some of the busier paths on the other two main routes of Machame and Marangu. The extra day and the slightly easier gradient through the forest makes it a slightly better option for acclimatisation. The first two days journeys through the Lemosho Glades, which is the rainforest that encircles the mountain at this altitude between 2400 and 3500 metres where you might see Colobus monkey, and plenty of birds on the giant camphorwood trees. The forest thins out and the path climbs onto the vast Shira Plateau which was created during the last eruption an estimated 50,000 years ago. The route then skirts the southern flanks of the mountain, with campsites at Barranco and Karanga Valley both at the same altitude which assist with acclimatisation. Then the path moves up to the final camp at Barafu (“ice” in Swahili) at 4600 metres which is the springboard for the big eight hour push up to the summit through the night. Lemosho is almost the same as Machame route in terms of the scenery with equally as distinctive ‘layers’ of habitat and ecosystems to journey through. The longer trail through the low level forest is particularly attractive and you are more likely to see some wildlife here than on the busier Machame side. The first camps at Mti Kubwa (Big Tree), Shira 1 and Moir Hut are quieter too, so there is a greater impression of remoteness and solitude."
            />

            <RouteDetails
              title="rongai route"
              description="As the only route that approaches the mountain from the north, the Rongai Route is quite  different from the others. You will begin your trip from close to the Kenyan border, and journey through areas of wilderness before joining the Marangu Route at Kibo Camp which is at the base of the summit massif. The descent is then on the Marangu Route so this is almost a complete north-south traverse of Kilimanjaro. The north side experiences lower precipitation, being in the rain shadow, so this trail is ideal for the rainy season as it is more sheltered. It is a much quieter route than the others, mainly because the extra time it takes to reach the gate at the start, so for many people this is their preferred route. This route is considered to be one of the easier routes up Kilimanjaro with a more gradual ascent up to the summit massif. For those with less backpacking and hiking experience, this may be preferred. On summit day itself the route reaches the summit crater at Gilman’s Point further away from the actual summit than the other routes, so psychologically this does make a difference. Having slogged through the night to reach the crater, it is that bit further than people on the Machame/Lemosho route to reach the escarpment to the summit proper. PROS AND CONS: Rongai offers a less challenging way up with an easier acclimatisation profile and lower traffic. It’s also the best trail if you’re hiking outside of dry season. The downside is that the views aren’t quite as captivating as the Machame or Lemosho routes, and the extra psychological push needed to get from the crater rim at Gilman’s Point up to the summit."
            />

            <Image
              image={orchids}
              altText="pay attention to orchids at rongai route"
              caption="pay attention to orchids at rongai route"
            />

            <RouteDetails
              title="umbwe route: used for descent"
              description="The Umbwe route is the most direct route on the mountain, it ascends steeply through forest up to Barranco Camp on the south side. This means that in terms of acclimatisation it would be the hardest to adapt to. The Kilimanjaro National Park designated this route to be a descent route some years ago so therefore it’s not possible to ascend the  Umbwe route anymore. It’s commonly used by porters to deliver food supplies up to Barranco Camp, and it’s also used a quite retreat for people who are sick at either Barranco or Karanga Camp. The route is mostly forested, a steep trail that ascends directly up a narrow valley from the roadhead to the Barranco Camp."
            />

            <Image
              image={umbweImg}
              altText="take your mountain bike to the highest point in Africa."
              caption="take your mountain bike to the highest point in Africa."
            />

            <RouteDetails
              title="mweka route: used for descent"
              description="Similar to Umbwe, Mweka Route is only used for descent nowadays and also is on the south side of the mountain. It is the most direct route for people coming off the summit on the Lemosho or Machame routes which use Barafu Camp as their final staging point for the summit. Coming off the summit, people come back to Barafu for a lunch and then descend directly down the Mweka route to Millennium Camp at the forest line for one more night under canvas. The next morning the Mweka route continues through forest and eventually onto a road to reach Mweka Gate which is where you can get sign out of the park and receive your summit certificate. Because the roadhead ascends quite a way up through the forest, this route is popular for emergencies on the basis that a jeep or ambulance can make it quite high to pick up an invalid"
            />
          </section>
          <Footer />
        </>
      )}
    </div>
  );
};

export default MountKilimanjaroPage;

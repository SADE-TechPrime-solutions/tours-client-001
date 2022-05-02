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

const MountRuwenzoriPage = () => {
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
            title="i love ruwenzori"
            description="As the popularity of climbing Mount Kilimanjaro continues to increase, potential climbers are often uncertain as to which route to take. This site will explain the differences between the routes and help you decide which is the best for you. At 5,895 meters (19,341 feet) Mount Kilimanjaro is the highest mountain in Africa and the tallest freestanding mountain in the world; it is one of the Seven Summits. The snow-capped peak of Africa is a dormant volcano and can be found inside the Kilimanjaro National Park of Tanzania."
          />
          // {/* end of hero */}
          {/* arrangements and documentation */}
          <section className="arrangements-docuemtation__section">
            <div className="arrangements__container">
              <div className="arrangements__descritption">
                <Heading
                  bgText="the mountain of the moon"
                  mainHeading="climbing mount ruwnzori in uganda"
                  subHeading="the mountain of the moon"
                />
                <h4 className="educational__subtitle">
                  Background Information
                </h4>
                <p className="arrangements__description--text">
                  Are you thinking of a mountaineering trip in Africa? The
                  Rwenzori Mountains is one of the top destinations visited by
                  travelers that wish to explore the snow-capped mountains
                  within Africa. Trekking the green, mist-shrouded Rwenzori
                  Mountains is like stepping into a wonderland. An incredible
                  experience will stay with you for a lifetime when a person
                  talks about the Rwenzoris Where Are the Rwenzori Mountains?
                  Rwenzori Mountains National Park is located in South Western
                  Uganda. It is shared by Uganda and Democratic Republic of
                  Congo (DRC). In Uganda, these mountain ranges are found in
                  Rwenzori National Park while in Congo it found in Virunga
                  National Park, Africa’s oldest national park. The Rwenzori
                  Mountains are composed of various ranges and they are located
                  within the great Albertine Rift valley. The ranges run for 130
                  km north to south along the border between western Uganda and
                  eastern DRC. The Ugandan portion of the mountains can be found
                  in the southwest of the country. Visitors that visit Rwenzori
                  Mountains can addon wildlife safari in Queen Elizabeth
                  National Park which is the closest Park.
                </p>

                {/* <h4 className="educational__subtitle">
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
                </p> */}
              </div>
            </div>
          </section>
          {/* end of arrangements and documentation */}
          <section className="educational-section">
            <h1 className="educational__title">
              mount ruwenzori route details
            </h1>
            <p className="background__information route-detail__description">
              The mountain is a home to various tree and plant species, as well
              as flowers. If you enjoy amazing mountain scenery and hiking but
              don't have advanced mountaineering skills, there are two
              routes around the region that give you a spectacular Rwenzori
              experience without the overwhelming challenge of ascending these
              mountains. There are special things about exploring the Rwenzori
              Mountains and these two routes will offer you all the scenic
              beauty of the region.
            </p>
            <RouteDetails
              title="Rwenzori Central Circuit"
              description="The Rwenzori Central Circuit is the oldest and most popular route used to get to the stunning Margherita Peak on Mountain Rwenzori. It is managed and operated by the indigenous Bakonjo people who reside around the Mountain. The major reason as to why it was considered an ideal Route to the Peak is, unlike other Routes, the Central Circuit Route is easy and less challenging for hikers that are not that fit. It also has numerous things to offer to all hikers and these include; beautiful views of all the other portal peaks i.e Baker, Speke and Stanley, vegetation Terrain, Bird Species, mammal species, primates etc.
              The Ascension and Descend of the Mountain along this Route is remarkable due to the fact that hikers can transfer along various paths/ trails which offer hikers an opportunity to explore and discover more of the Mountain.
              Accommodation along this route is in form of wooden Cabins at particular stops for all hikers."
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

export default MountRuwenzoriPage;

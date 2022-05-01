import React, { useState, useEffect } from "react";
import Heading from "../../Heading/Heading";
import HeroFE from "./Hero/Hero";
import RouteDetails from "./RouteDetails/RouteDetails";
import Benefit from "./Benefits/Benefit";
import Footer from "./Footer/Footer";

import imgbg from "./../../../Assets/images/vac6.jpg";
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
            description="As the popularity of climbing Mount Kilimanjaro continues to increase, potential climbers are often uncertain as to which route to take. This site will explain the differences between the routes and help you decide which is the best for you. At 5,895 meters (19,341 feet) Mount Kilimanjaro is the highest mountain in Africa and the tallest freestanding mountain in the world; it is one of the Seven Summits. The snow-capped peak of Africa is a dormant volcano and can be found inside the Kilimanjaro National Park of Tanzania."
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

          <section className="educational-section">
          <h1 className="educational__title">mount kilimanjaro climbing routes</h1>
          <p className="background__information route-detail__description">
          Some 30,000 people climb Kilimanjaro every year, making it one of Africa’s most popular attractions. And as Africa’s highest peak and one of the fabled Seven Summits, the summit is also one of the most challenging attractions to reach! Tanzania’s iconic mountain stands at 5895 metres but despite its intimidating size, conquering it is entirely feasible if you’ve got a good level of fitness and a decent amount of determination. To climb up Kilimanjaro, you’ll need both physical and mental strength, but that rewarding feeling and sense of achievement at the top will be completely worth it. <strong>some of the wilderness alternative recommended routes are:</strong> 
          </p>
              <RouteDetails title="machame" description="The Machame route on Kilimanjaro is a seven day camping route which allows for excellent acclimatisation and particularly diverse scenery. It has been called the Whiskey route in the past and nowadays about 35% of all climbers on the mountain use it.In a matter of days you will climb Kilimanjaro from the equator up to an Arctic zone, moving through grasslands, tropical rainforest, alpine meadows, moorlands and high desert to snow and ice. Each day on this route presents quite a distinct ecosystem to experience, which is one reason it is so popular. The entire climb up and down is approximately 62 km/ 37 miles from gate to gate. The height gain from the gate to the summit is 4157 metres, which is ascended over six days of around 5-7 days walking each day.From the start you will be speaking with experienced people who have climbed Kilimanjaro many times, including Kenny who has been leading groups on the mountain regularly  and is always on hand for advice. We can give you an honest appraisal of the climb, about training for the mountain what clothing and equipment you will need to buy or rent . The camps for the seven day Machame route are Machame, Shira, Barranco, Karanga Valley, Barafu and Millennium (or sometimes Mweka). Please talk to one of our specialists on WhatsApp to learn  more about  this route." />

              <RouteDetails title="marangu route" description="The Marangu Route is the oldest and most well established trekking route on Mount  Kilimanjaro, and it remains extremely popular, despite a wide variety of other options becoming available.This path provides trekkers with the classic Kilimanjaro climbing experience, offering sweeping views and a wonderful hiking adventure all the way to the summit of Uhuru Peak. That said, it also has some unique aspects that set it apart from any of the other routes as well, giving Marangu route a character and feeling that is entirely its own.One of the more interesting aspects of Marangu Route is that it is the only route up Mount Kilimanjaro that doesn’t allow camping, so instead of sleeping in tents, trekkers stay in permanent huts instead.These dormitory-style shelters provide extra protection from the wind and rain, which makes this route a popular one for travelers climbing during the rainy season, which comes in April and May. There are 60 bunk beds each at Mandara and Kibo Huts, and 120 bunk beds at Horombo HutWhile staying at those huts, trekkers will sleep in bunk beds equipped with a simple mattress and pillow. They’ll also be able to purchase an array of candy bars, bottled water, and soft drinks, which is why Marangu route is often referred to as the “Coca-Cola Route.”Because it is one of the shortest treks to the summit – requiring just five days to reach uhuru peak – the Marangu Route is a popular one with trekkers who have a limited amount of time for their climb. The exact distance on the Marangu Route is 82km or 50 miles. The shortest number of days required for the Marangu Route is 5 days, however, when you take into consideration the arrival and departure days, it is 9-10 days. As the Marangu Route is the shortest route on the mountain, it is best to complete the journey over 6 days to increase your chances of success." />

              <RouteDetails title="LEMOSHO ROUTE: HIGHLY RECOMMENDED" description="Lemosho is a relatively new route and it was designed to absorb some of the busier paths on the other two main routes of Machame and Marangu. The extra day and the slightly easier gradient through the forest makes it a slightly better option for acclimatisation. The first two days journeys through the Lemosho Glades, which is the rainforest that encircles the mountain at this altitude between 2400 and 3500 metres where you might see Colobus monkey, and plenty of birds on the giant camphorwood trees. The forest thins out and the path climbs onto the vast Shira Plateau which was created during the last eruption an estimated 50,000 years ago. The route then skirts the southern flanks of the mountain, with campsites at Barranco and Karanga Valley both at the same altitude which assist with acclimatisation. Then the path moves up to the final camp at Barafu (“ice” in Swahili) at 4600 metres which is the springboard for the big eight hour push up to the summit through the night. Lemosho is almost the same as Machame route in terms of the scenery with equally as distinctive ‘layers’ of habitat and ecosystems to journey through. The longer trail through the low level forest is particularly attractive and you are more likely to see some wildlife here than on the busier Machame side. The first camps at Mti Kubwa (Big Tree), Shira 1 and Moir Hut are quieter too, so there is a greater impression of remoteness and solitude." />

              <RouteDetails title="rongai route" description="As the only route that approaches the mountain from the north, the Rongai Route is quite  different from the others. You will begin your trip from close to the Kenyan border, and journey through areas of wilderness before joining the Marangu Route at Kibo Camp which is at the base of the summit massif. The descent is then on the Marangu Route so this is almost a complete north-south traverse of Kilimanjaro. The north side experiences lower precipitation, being in the rain shadow, so this trail is ideal for the rainy season as it is more sheltered. It is a much quieter route than the others, mainly because the extra time it takes to reach the gate at the start, so for many people this is their preferred route. This route is considered to be one of the easier routes up Kilimanjaro with a more gradual ascent up to the summit massif. For those with less backpacking and hiking experience, this may be preferred. On summit day itself the route reaches the summit crater at Gilman’s Point further away from the actual summit than the other routes, so psychologically this does make a difference. Having slogged through the night to reach the crater, it is that bit further than people on the Machame/Lemosho route to reach the escarpment to the summit proper. PROS AND CONS: Rongai offers a less challenging way up with an easier acclimatisation profile and lower traffic. It’s also the best trail if you’re hiking outside of dry season. The downside is that the views aren’t quite as captivating as the Machame or Lemosho routes, and the extra psychological push needed to get from the crater rim at Gilman’s Point up to the summit." />

              <RouteDetails title="umbwe route: used for descent" description="The Umbwe route is the most direct route on the mountain, it ascends steeply through forest up to Barranco Camp on the south side. This means that in terms of acclimatisation it would be the hardest to adapt to. The Kilimanjaro National Park designated this route to be a descent route some years ago so therefore it’s not possible to ascend the  Umbwe route anymore. It’s commonly used by porters to deliver food supplies up to Barranco Camp, and it’s also used a quite retreat for people who are sick at either Barranco or Karanga Camp. The route is mostly forested, a steep trail that ascends directly up a narrow valley from the roadhead to the Barranco Camp." />

              <RouteDetails title="mweka route: used for descent" description="Similar to Umbwe, Mweka Route is only used for descent nowadays and also is on the south side of the mountain. It is the most direct route for people coming off the summit on the Lemosho or Machame routes which use Barafu Camp as their final staging point for the summit. Coming off the summit, people come back to Barafu for a lunch and then descend directly down the Mweka route to Millennium Camp at the forest line for one more night under canvas. The next morning the Mweka route continues through forest and eventually onto a road to reach Mweka Gate which is where you can get sign out of the park and receive your summit certificate. Because the roadhead ascends quite a way up through the forest, this route is popular for emergencies on the basis that a jeep or ambulance can make it quite high to pick up an invalid" />
          </section>
          <Footer />
        </>
      )}
    </div>
  );
};

export default MountKilimanjaroPage;

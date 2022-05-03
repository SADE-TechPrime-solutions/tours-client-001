import React, { useState, useEffect } from "react";

import Heading from "../../Heading/Heading";
import HeroFE from "./Hero/Hero";
import RouteDetails from "./RouteDetails/RouteDetails";
import Image from "./Image/Image";
import Footer from "./Footer/Footer";

// images importing
// chogoria-route-via-mintos-camp
import imgbg from "./../../../Assets/images/vac6.jpg";

// the images
import elephants from "./../../../Assets/images/client-images/elephants-at-amboselli.jpg";
import lodge from "./../../../Assets/images/client-images/oldonyo-lodge.jpg";
import buffalo from "./../../../Assets/images/client-images/cape-buffalo.jpg";
import lion from "./../../../Assets/images/client-images/lion-at-tsavo.jpg";
import flamingo from "./../../../Assets/images/client-images/flamingo-on-lake-nakuru.jpg";
import wildbeasts from "./../../../Assets/images/client-images/wildbeasts-migration-at-maasai-mara.jpg";
import palmTrees from "./../../../Assets/images/client-images/palm-trees-on-the-kenyan-coast.jpg";
import hotAirBaloon from "./../../../Assets/images/client-images/hot-air-baloon-at-maasai-mara.jpg";

import LoaderAnimation from "../../Loader/LoaderAnimation";

const KenyanPhotographicSafarisPage = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <div className="root">
      {loading ? (
        <LoaderAnimation />
      ) : (
        <>
          <HeroFE
            backImg={imgbg}
            title="kps is awesome"
            description="Experience beautiful landscapes and spectacular mountain views on this 5-day Mt Kenya climb along the Chogoria Route. From gentle hikes to steep ascents, this route will lead you through fairy forests and moorlands, passing high waterfalls and gurgling streams. Make sure to look for elephants, buffaloes, and antelopes in the lower mountain region."
          />
          {/* arrangements and documentation */}
          <section className="arrangements-docuemtation__section">
            <div className="arrangements__container">
              <div className="arrangements__descritption">
                <Heading
                  bgText="a trip to kenya"
                  mainHeading="why safari in Kenya"
                  subHeading="top safari destination"
                />
                <h4 className="educational__subtitle">
                  Background information
                </h4>
                <p className="arrangements__description--text">
                  Planning a trip to Africa can be daunting especially if you
                  still have no idea where to go. If you already have your heart
                  set on Kenya, then you’re up for some serious adventure. If
                  not, well, maybe if you’d understand why Adventure lovers love
                  Kenya and then you will love it, too. The best part of Kenya
                  being a top safari destination is, you get to experience all
                  these in the raw! You can see lions, cheetahs, zebras,
                  gazelles and a lot more animals in their natural habitat. If
                  you’re lucky, you can even touch them, feed them and ride
                  them! All you need is an expert guide and a reliable Kenya
                  safari tour operator to bring you to the right places at the
                  right times.
                </p>

                <h4 className="educational__subtitle">Tropical weather</h4>
                <p className="arrangements__description--text">
                  Kenya is geographically located on the equator. That means the
                  temperature in this country is pretty constant all year-round.
                  If you’re up for taking a break with your heavy winter
                  clothes, fur coats and layers, head on to Kenya to enjoy
                  beautiful tropical weather. In there, you can enjoy long sunny
                  days and stunning evenings under the stars. Like a cherry on
                  top, Kenya also boasts of an astounding string of white sand
                  beaches, diving spots, and fishing areas. From kiting to beach
                  volleyball to scuba diving, the shores of Kenya has a lot to
                  offer even to the little children! So if you think about it,
                  you get to experience the bush AND enjoy the beach. It’s the
                  best of both worlds!
                </p>

                <Image
                  image={palmTrees}
                  altText="Sarova whitelands beach resort and spa on the Kenyan Coast."
                  caption="Sarova whitelands beach resort and spa on the Kenyan Coast."
                />

                <h4 className="educational__subtitle">
                  Adventure at its finest
                </h4>
                <p className="arrangements__description--text">
                  With unparalleled natural beauty, amazing wildlife, a wide
                  array of accommodation options, beautiful weather and pristine
                  beaches plus the Great Migration, you’d think that’s enough.
                  But then again, Kenya has so much more to offer. With all
                  these and more, it is only proven further that Kenya is the
                  top safari destination for 2021. Some camps in Kenya features
                  Adventure Club for kids. In these clubs, the kids are left to
                  learn new things and at the same time have fun. The basics of
                  the wild, conservation strategies and respect to the
                  environment are some of the things that kids will learn.
                  Childminders are also available upon request. With this
                  option, Kenya proves to be a top safari destination for
                  families.
                </p>

                <Image
                  image={hotAirBaloon}
                  altText="What is more magical than a sunrise on hot air baloon safari in the Maasai Mara."
                  caption="What is more magical than a sunrise on hot air baloon safari in the Maasai Mara."
                />

                <h4 className="educational__subtitle">Ethnic diversity</h4>
                <p className="arrangements__description--text">
                  Kenya is a country that hosts various cultures and a
                  fascinating blend of people. In here, you get to meet them and
                  immerse in their cultures. The Maasai, Swahili, Samburu, El
                  Molo, Turkana, Pokot, and Rendille are some of the many tribes
                  that you can see. What makes this more interesting is that you
                  might be able to participate in some of their traditions and
                  ceremonies. You might even learn how to make bead chokers and
                  cook their local meals! Plus, you can learn their tribal
                  dances like you’re partying with them!
                </p>

                <Image
                  image={hotAirBaloon}
                  altText="What is more magical than a sunrise on hot air baloon safari in the Maasai Mara."
                  caption="What is more magical than a sunrise on hot air baloon safari in the Maasai Mara."
                />
              </div>
            </div>
          </section>
          {/* end of arrangements and documentation */}
          {/* benefits */}
          <section className="fe-benefits">
            <Heading
              mainHeading="wildlife photographic parks in kenya"
              subHeading="where to do safari photography in Kenya"
              bgText="safari photography"
            />
          </section>
          {/* end of benefits */}
          <section className="route-details__section">
            <RouteDetails
              title="Amboseli National Park "
              description="If you are looking for the best destination for your vacation, consider Amboseli National Park. Amboseli National Park is a photographers' and wildlife enthusiasts' paradise where 1000s of gentle giants (elephants) rule the land backdropped by scenic views of Mount Kilimanjaro-tallest Mountain on the African continent and the highest free-standing mountain in the world.

              All these plus a wide variety flora & fauna, birdlife and amazing scenery make Amboseli one of the best safari destinations in Africa and the world.
              
              Your Amboseli safari can be combined with KENYA'S MasaiMara National Reserve, Lake Nakuru National Park, Lake Naivasha, TsavoEast National Park, Tsavo West National Park, SamburuNationalReserve, Olpejeta Conservancy, Meru National Park."
            />

            <Image
              image={elephants}
              altText="the largest animal on land photographed next to the highest mountain in Africa."
              caption="the largest animal on land photographed next to the highest mountain in Africa."
            />

            <RouteDetails
              title="TSAVO NATIONAL PARK, TSAVO EAST AND TSAVO WEST "
              description="Tsavo East and Tsavo West National Parks combined together form one of the world’s largest and oldest national parks, covering 4% of Kenya. It is 9 times bigger than the Maasai Mara and is well known for its mane-less lions, big herds. The Yatta Plateau, approximately 290km (180 miles) long, is the world's longest lava flow (also the oldest fossilized lava flow on Earth) and is one of the park's major features.
              Tsavo East offers great wildlife viewing in pristine wilderness. All of the Big Five are here. Elephants are common, and their red dust coating makes them stand out against the arid environment. Of the big cats, lions are most easily spotted. Buffalo, zebra and plenty of Masai giraffes are some of the other animals you can expect to see."
            />

            <Image
              image={lodge}
              altText="Ol donyo lodge stadning out as a gem in Chyulu hills, sandwiched between Amboselli national park and the famous Tsavo."
              caption="Ol donyo lodge stadning out as a gem in Chyulu hills, sandwiched between Amboselli national park and the famous Tsavo."
            />

            <RouteDetails
              title="HISTORY OF LIONS IN TSAVO - ‘THE MAN-EATERS OF TSAVO’"
              description="The Tsavo Man-Eaters were a pair of man-eating male lions in the Tsavo region, which were responsible for the deaths of dozens of construction workers on the Kenya-Uganda Railway between March and December 1898. They are notable for their unusual behavior of killing men and the manner of their attacks.
              Your Tsavo Safari can be Combined with Masai Mara National Reserve, Amboseli National Park, Lake Nakuru National Park, Samburu National Reserve, Tsavo West National Park, and Tsavo East National Park depending on the Number of Days You are willing to spend in Kenya ."
            />

            <Image
              image={lion}
              altText="A male lion trying to hunt a buffalo."
              caption="A male lion trying to hunt a buffalo."
            />

            <RouteDetails
              title="Lake Nakuru National Park"
              description="Lake Nakuru National Park is a place endowed with beautiful nature, landscape and natural features; these all combine together to give this park beautiful sceneries for photography and videography. Most people visit the park to take great photos for magazines and several media platforms. . The other feature that makes Lake Nakuru and Lake Nakuru National Park famous and the most sought after places, is the flocks of flamingos that make their life on Lake Nakuru National Park. Lake Nakuru has been known to have the greatest number of flamingos in the whole of Kenya and most people visit Lake Nakuru National Park to experience these pink birds.
              "
            />

            <Image
              image={flamingo}
              altText="Hot pink flamingos on Lake Nakuru national park."
              caption="Hot pink flamingos on Lake Nakuru national park."
            />

            <RouteDetails
              title="Lake Nakuru Land scape"
              description="Lake Nakuru National Park is endowed with a unique land scape that has rocky ridges spread across the park that make the park’s topography adventurous, fascinating and beautiful. Some rocky ridges are really raised above the park’s ground level and they are used by guests as viewpoints for wildlife, birdlife and nature. These viewpoints on top of offering great viewing vantage points they also have great ambiences that are used as picnic sites by most guests to the park.  All the viewpoints are overlook the lake and offer great views of the surrounding; the most prominent viewpoints are the Baboon Cliff, Out of Africa Lookout and the Lion Hill."
            />
            <Image
              image={buffalo}
              altText="A big cape buffalo casting an intimidating smile on nature walkers"
              caption="A big cape buffalo casting an intimidating smile on nature walkers"
            />
            <RouteDetails
              title="Maasai mara "
              description="Lake Nakuru National Park is endowed with a unique land scape that has rocky ridges spread across the park that make the park’s topography adventurous, fascinating and beautiful. Some rocky ridges are really raised above the park’s ground level and they are used by guests as viewpoints for wildlife, birdlife and nature. These viewpoints on top of offering great viewing vantage points they also have great ambiences that are used as picnic sites by most guests to the park.  All the viewpoints are overlook the lake and offer great views of the surrounding; the most prominent viewpoints are the Baboon Cliff, Out of Africa Lookout and the Lion Hill."
            />

            <Image
              image={wildbeasts}
              altText="The great migration at maasai mara."
              caption="The great migration at maasai mara."
            />

            <RouteDetails
              title="Biggest reason to visit Maasai mara"
              description="Close your eyes and envision a gentle rolling savannah stretching out as far as the eye can see. Imagine countless wildebeest and zebras grazing lazily right there in front of you. The feeling is humbling and inspiring all wrapped into one. Imagine of cheetah and her cub gazing out across golden-hued plains from the top of a dusty termite hill, zebra and wildebeest plunging into the crocodile-infested waters of the Mara River and Masai herdsmen herding their cattle clothed in colorful traditional dress. The Masai Mara National Reserve speaks to the imagination and the nomadic traveler’s heart like few other safari destinations do. The Masai Mara is known for the highest concentration of wild animals in the world. More than 40% of Africa’s larger mammals can be found here. However, there’s more to the Masai Mara than endless plains. Aside from the main Masai Mara National Reserve proper there are a dozen community conservancies, several group ranches and quite a few Maasai villages in the area."
            />

            {/* probalby and image here */}
            <h2 className="educational__title">
              the summarized 6 days maasai mara itinerary
            </h2>
            <ol className="educational__list">
              <li className="educational__text">
                <strong>Day1:</strong> Arrival in Nairobi
              </li>
              <li className="educational__text">
                <strong>Day 2:</strong> Nairobi- Hells Gate National Park – Lake
                Nakuru National Park
              </li>
              <li className="educational__text">
                <strong>Day 3:</strong> Lake Nakuru National Park – Masai Mara
              </li>
              <li className="educational__text">
                <strong>Day 4:</strong> Masai Mara Full day game drive
              </li>
              <li className="educational__text">
                <strong>Day 5:</strong> Masai Mara – Activities
              </li>
              <li className="educational__text">
                <strong>Day 6:</strong> Masai Mara- Nairobi
              </li>
            </ol>
          </section>
          <Footer />
        </>
      )}
    </div>
  );
};

export default KenyanPhotographicSafarisPage;

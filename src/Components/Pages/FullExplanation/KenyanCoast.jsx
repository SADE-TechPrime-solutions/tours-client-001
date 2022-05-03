import React, { useState, useEffect } from "react";

import Heading from "../../Heading/Heading";
import HeroFE from "./Hero/Hero";
import RouteDetails from "./RouteDetails/RouteDetails";
import Image from "./Image/Image";
import Footer from "./Footer/Footer";

// images importing
import imgbg from "./../../../Assets/images/client-images/bg-coast.jpg";
import watamuBeach from "./../../../Assets/images/client-images/watamu-beach.jpg";
import mombasaTusks from "./../../../Assets/images/client-images/mombasa-tusks.jpg";
import mombasaOldTown from "./../../../Assets/images/client-images/mombasa-old-town.jpg";
import lamuIsland from "./../../../Assets/images/client-images/lamu-island.jpg";
import diyaniBeauty from "./../../../Assets/images/client-images/beauty-of-diani-beach.jpg";
import trip from "./../../../Assets/images/client-images/trip-to-wasini-island.jpg";
import shimbaHills from "./../../../Assets/images/client-images/shimba-hills.jpg";

import LoaderAnimation from "../../Loader/LoaderAnimation";

const KenyanCoastPage = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);
  return (
    <div>
      {loading ? (
        <LoaderAnimation />
      ) : (
        <>
           {/* hero */}
          <HeroFE
            backImg={imgbg}
            title="ever dreamt of visiting the Kenyan Coast?"
            description="The Kenyan coast Protected by an offshore barrier coral reef, Kenya’s coastline is famous for its spectacular beaches, tropical waters and array of water sports such as snorkeling, scuba diving, fishing, and kite surfing. With its own unique character, the Kenyan coast offers the perfect end to an exhilarating safari.
            The breathtaking destination of Kenyan coast boasts the region’s most prized beaches, and south of Diani is where you will find Wasini Island and the Wasini Marine National Park, one of the best snorkelling places in Africa."
          />
          {/* end of hero */}
          {/* arrangements and documentation */}
          <section className="arrangements-docuemtation__section">
            <div className="arrangements__descritption">
              <Heading
                bgText="indian ocean"
                mainHeading="visit the blue Indian Ocean"
                subHeading="holidays in Kenyan coast"
              />
              <h4 className="educational__subtitle">Kenyan Coast attraction</h4>
              <p className="arrangements__description--text">
                The immense 490 kilometre coastline that defines Eastern Kenya
                is lined with palm trees from where it meets Somalia in the
                north to Tanzania in the south. This is  where rugged wilderness
                meets the glistening waters of the Indian Ocean, the revered
                Kenyan coastline is a place of unimaginable beauty. Where gentle
                trade winds allowed the passage of traditional dhow boats
                between Arabia and India, traders once saw the area as a
                favoured spot to exchange spices. The resulting heady mix of
                imported and indigenous influences from Africa, Arabia and Asia
                created Swahili culture, which would go on to produce Kenya’s
                most spoken language. Today, this melting pot of people and
                cultures is still felt and can be enjoyed alongside excellently
                preserved marine life and spectacular offshore coral reef
                system, stunning beaches and mangroves that teem with birdlife,
                making it a perfect place to unwind once your safari time is
                over. The capital, Mombasa, is Kenya’s second largest city and
                the gateway to some of the finest beaches and resorts in the
                area. Despite Mombasa’s heavy development for mass tourism, we
                feature those areas that truly portray the beauty and serenity
                of the area, away from the tourist hordes. A small coastal town
                two hours north of Mombasa, Watamu Bay has an impressive coral
                reef and Swahili influence and is a tranquil destination that
                also has a National Marine Park, which is a popular day-trip
                option for snorkelling and exploring the abundant marine life.
              </p>
              <Image
                image={watamuBeach}
                altText="Watamu, a low key Peninsula in Kenya"
                caption="Watamu, a low key Peninsula in Kenya"
              />
            </div>
          </section>
          <section className="route-details__section">
            <Heading
              bgText="Kenyan Coast"
              subHeading=""
              mainHeading="top places to visit in the Kenyan Coast"
            />

            <p className="arrangements__description--text width-fix__text">
              If you want to explore underwater, we’ll help you choose the right
              spots at the right time of year. If you want honeymoon privacy,
              stylish luxury, affordable comforts or a lively resort base, we’ve
              got the ideal hotels. And if you do want activities – whether it’s
              a visit to the old city of Mombasa or an extra helping of safari
              with a trip inland to the alluring Shimba Hills or Tsavo East
              National Park – we can safely say we’ve been there and done it,
              and we’re ready to give you the best advice available. Most
              travellers use their beach stay simply to chill after several days
              on safari. But you can also do a further safari from the Kenya
              coast, or even use the coast as a base for your whole holiday,
              taking safari trips inland.
            </p>

            <RouteDetails
              title="mombasa"
              description="What are the  things to Do in Mombasa Kenya. Before we go into them, lets start with a little backgorund information. Mombasa is an Island on the Indian ocean and the capital of the wider Mombasa county that consists of several other nearby smaller islands. Mombasa is Kenya’s second largest metropolitan area after Nairobi and is located along the eastern coast of Kenya. Mombasa was at first referred to as “Manbasa” – meaning an Island of war. This was because the island was the center stage for countless wars of occupation by the early settlers (Arabs, Portuguese, Locals and the British"
            />

            <Image
              image={mombasaTusks}
              altText="Most visited and famous monumental strucutures in Mombasa, it was build to remember a special visit by Queen Elizabeth in 1952."
              caption="Most visited and famous monumental strucutures in Mombasa, it was build to remember a special visit by Queen Elizabeth in 1952."
            />

            <RouteDetails
              title=""
              description="Mombasa offers tourists a chance to experience its rich seafaring traditions, coral reefs, water sports, seas food, architectural wonders, amazing hotels and palm tree/white sand beaches. There is so much to see and experience that traveler’s multiple times only to discover something they didn’t know existed. We shall discuss into  details once you contact us  following chapters. But first, you might want to read an article about other coastal towns to visit in the Kenyan Coast apart from Mombasa."
            />

            <Image
              image={mombasaOldTown}
              altText="If you want to understand more about the kind of life lived by the Portuguese traders at the time, you should pay a visit to the Old town of Mombasa."
              caption="If you want to understand more about the kind of life lived by the Portuguese traders at the time, you should pay a visit to the Old town of Mombasa."
            />

            <RouteDetails
              title="Lamu island"
              description="with intriguing history, natural beauty, and amenities for every travel style, but set apart from the tourist crowds? Then Lamu Island certainly deserves a close Lamu is also one of the most magical destinations in Kenya, is famed for being the oldest and best-preserved example of a Swahili settlement in East Africa. The Old Town has been inhabited for over 700 years and is made particularly beautiful by the assortment of Swahili, Arabic, Persian, Indian, and European architecture. Since 1370, different cultures have been lured to Lamu, making it an important trading port along the East Africa coast.  
              Nowadays it enchants visitors with its narrow cobbled alleyways, wandering donkeys, weather-beaten stone buildings, hidden courtyards, and the sight of rustic wooden dhows sailing in the distance. Visit the local mosques, wander the streets of quaint Shela village, sail over to the luxurious Majlis Resort for a swim and a cocktail, or while away the hours on an ornate roof terrace."
            />

            <Image
              image={lamuIsland}
              altText="An aerial view of beatiful Lamu Island, The Pride of Kenyan Coast"
              caption="An aerial view of beatiful Lamu Island, The Pride of Kenyan Coast"
            />

            <RouteDetails
              title="diyani beach"
              description="Diani Beach is a beach resort in Kenya  located 30 km (19 miles) south of Mombasa. Diani has a population of around 100,000 inhabitants and is famous for its white sand beaches, blue ocean and surfing. The beach is popular for relaxing resorts which are popular with honeymooners, backpackers and families on holiday. The white sand surrounded by abundant forest drives the attention of many nature lovers towards the resorts. Waves near the sea shore attract many adventure lovers towards the destination. Not only is Diani Beach one of Africa’s best beaches, but we would even go one step further and claim it’s one of the top beach destinations in the world! Voted as one of the top beaches in Africa by CNN, Diani.
              It’s not just the breathtaking location and scenery of Diani Beach that impress, an extensive range of experiences are on offer, for both adults and families to enjoy. The area near the beach is well known for coral reefs, black and white Colombus monkeys and nearly located wildlife reserve named as Shimba Hills National Reserve."
            />

            <Image
              image={diyaniBeauty}
              altText="The white sands of Diyani beach."
              caption="The white sands of Diyani beach."
            />

            <RouteDetails
              title="Trip By Dhow to Wasini Island"
              description="Wasini Island lies south of Mombasa and has an area of only five square kilometres. It is very popular to take a dhow trip from Mombasa. It is exciting to see dolphins cruising by along the way. It is a great idea to stop and snorkel near the coral reefs. Besides, the trip provides a cultural experience since ancient Swahili villages lie around. Discover the Shimoni Caves which is thought to have held slaves before shipment to Arabia. Finally, stop by Wasini Island for a seafood pleasure."
            />

            <Image
              image={trip}
              altText="Trip to Wasini Island where natue speaks."
              caption="Trip to Wasini Island where natue speaks."
            />

            <RouteDetails
              title="shimba hills national reserve"
              description="For those who want to escape and have a quiet gateway from the commercial hub, Shimba Hills National Park is a great way to do so. Floating a misty-cool 400m above the palm-fringed beaches of Kenya's glittering coastline, the Shimba Hills National Reserve offers a unique blend of wood-cloaked downs, wandering elephant, breeze-fanned hills, plunging waterfalls, liana-strung jungle and the primeval stillness of one of the last remaining coastal rainforests on earth. Famed as the only Kenyan habitat of the rare and magnificent sable antelope, this unique Reserve is within thirty minutes of the beach, commands panoramic vistas over the Indian Ocean and plays host to one of the most enchanting tree hotels in Kenya."
            />

            <Image
              image={shimbaHills}
              altText="This is Shimba Hills, the hidden beauty of Coastal Kenya."
              caption="This is Shimba Hills, the hidden beauty of Coastal Kenya."
            />
          </section>
          <Footer />
        </>
      )}
    </div>
  );
};

export default KenyanCoastPage;

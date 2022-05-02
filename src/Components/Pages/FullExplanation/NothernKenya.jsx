import React, { useState, useEffect } from "react";

import Heading from "../../Heading/Heading";
import HeroFE from "./Hero/Hero";
import Benefit from "./Benefits/Benefit";
import RouteDetails from "./RouteDetails/RouteDetails";
import Image from "./Image/Image";
import Footer from "./Footer/Footer";

// images importing
// chogoria-route-via-mintos-camp
import imgbg from "./../../../Assets/images/client-images/background.jpg";
import austrianHut from "./../../../Assets/images/client-images/Austrian-hut-camping-on-narumoru-route.jpeg";
import lakeTurkana from "./../../../Assets/images/client-images/lake-turkana.jpg";
import chalbiDesert from "./../../../Assets/images/client-images/chalbi-desert.jpg";
import samburuNationalPark from "./../../../Assets/images/client-images/samburu-national-park.jpg"
import buffaloSprings from "./../../../Assets/images/client-images/buffalo-springs.jpg";
import lewa from "./../../../Assets/images/client-images/the-beauty-of-lewa-wildlife-conservacy.jpg";
import loyangalaniBeach from "./../../../Assets/images/client-images/loyangalani-beach.jpeg";
import desertMuseum from "./../../../Assets/images/client-images/desert-museum.jpg";
import marsabitNationalPark from "./../../../Assets/images/client-images/marsabit-national-park.jpeg";
import bgInfoImg from "./../../../Assets/images/client-images/the-unspoiled-beaches-of-lake-turkana.jpg";
import elephantCrossing from "./../../../Assets/images/client-images/elephant-crossing-ewaso-nyiro-river-in-samburu.jpg";
import sasaabLodge from "./../../../Assets/images/client-images/sasaab-lodge-by-ewaso-nyiro-river-on-samburu.jpg";
import elephantBedroomLodge from "./../../../Assets/images/client-images/elephant-bedroom-lodge.jpeg";
import chalbiMemories from "./../../../Assets/images/client-images/chalbi-desert-the-home-of-unforgettable-memories.jpeg";
import rendilleCommunity from "./../../../Assets/images/client-images/rendille-community-at-the-edge-of-chalbi-desert.jpg";
import sunsetLakeTurkana from "./../../../Assets/images/client-images/sunset-at-lake-turkana.jpg";
import view from "./../../../Assets/images/client-images/the-view-of-meru-national-park-from-stunning-elsa-kopje-lodge.jpeg";
import buffalo from "./../../../Assets/images/client-images/portrait-of-buffalo-in-meru-national-park-kenya.jpg";
import LoaderAnimation from "../../Loader/LoaderAnimation"

const NothernKenya = () => {
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
           {/* hero */}
          <HeroFE
            backImg={imgbg}
            title="Explore the beauty of nothern kenya"
            description="Authentic expedition to Kenya for schools, Couples, solo Travelers, universities and youth groups which combines volunteering and charity projects with the Moving Mountains.  This rugged, dusty land is rich in history, cultural heritage and isolated appeal and offers the most epic of adventures for the wild at heart. Here, fiery desert plains give way to luscious jungles; bubbling oasis streams are set against imposing, glorious mountain ranges and black, volcanic lakeshores are trodden by some of the world’s most remote tribes"
          />
          {/* end of hero */}
          {/* arrangements and documentation */}
          <section className="arrangements-docuemtation__section">
            
          </section>
          {/* end of arrangements and documentation */}
          {/* benefits */}
          <section className="fe-benefits">
            <Heading
              mainHeading="top places to visit in nothern kenya"
              subHeading="visit nothern kenya"
              bgText="nothern kenya"
            />
            <div className="fe-benefits__container">
              <Benefit
                image={samburuNationalPark}
                title="samburu national park"
                description="Samburu National Reserve is made up of scrubby, open bush land and savanna, with the fringing riverine forest of acacias and large doum palms extending along the edge of the Ewaso Ngiro. This river is the heart of the park, as it not only makes it a beautiful and very photogenic park (contrasting against the bright and dry red soil), but also attracts a diversity of wildlife all year round. A range of animals come down to the river to drink and cool off in, and with crocodiles and hippos hiding in the shallow sand banks, surprises always await! Samburu National Reserve also has a particularly high elephant populations, and big families of them too! This is because the park is a migratory corridor that herds use daily, moving between Laikipia, Samburu and Mount Kenya for food, mating and minerals. The Mount Kenya Trust have seen huge success in its number of elephants using both the human-made and natural areas of the migratory corridor, dramatically reducing human-elephant conflict."
              />
              <Benefit
                image={lakeTurkana}
                title="lake turkana"
                description="Lake Turkana, formerly known as Lake Rudolf, and also sometimes referred to as the Jade Sea because of its waters' distinct colour is a desert lake found in Kenya's north-western frontier. It is the world's largest, permanent desert lake and is a UNESCO Important Bird Area. It is also enlisted as one of the endangered resources."
              />
              <Benefit
                image={austrianHut}
                title="meru national park"
                description="Meru National Park is unspoiled, untamed and exceptionally beautiful. The equator cuts through the park which is crisscrossed by many rivers and streams, making it a lush, tropical paradise. The scenery is spectacular and ranges from sweeping grasslands and mountainous slopes to winding rivers and Doum-palm forests.  Although Meru National Park was made famous by Joy Adamson's 'Born Free' books, it remains largely undiscovered and untamed. With its rugged jungle, rivers, swamps and grasslands, game viewing opportunities are excellent. Neglected on safari bucket lists for years, it has been restored to its former glory while evading the hordes of safari visitors.  The park was made famous as the setting for Joy Adamson's book 'Born Free' (1960), which details the story of the years she and her husband spent in the area researching the local lion and cheetah population. Elsa, the lioness who features in 'Born Free' and who captured the world's heart, is buried near her favourite stream in Meru National Park."
              />
              <Benefit
                image={lewa}
                title="lewa wildlife conservacy"
                description="Nestled within the sprawling Laikipia plains, the charming Lewa Safari Camp is set on the privately-owned Lewa Wildlife Conservancy; home to a splendid array of wildlife, and some of Kenya’s most spectacular scenery. Spacious and luxurious, each of the camp’s thatch-covered tents boast a comfortable bed, lovely ensuite bathroom and private veranda. The guest areas overlook a popular waterhole and include a dining room, library, bar and an inviting sitting area with a fireplace. In between game viewing adventures, guests can retreat to the coolness of a sparkling swimming or enjoy a spot of game viewing from the camp’s hide. Adventures include twice-daily game drives, guided walks, Ngare Ndare forest excursions, horseback safaris and camel rides, as well as enchanting cultural tours."
              />
              <Benefit
                image={chalbiDesert}
                title="chalbi desert"
                description="On the Kenyan north is a small desert, Chalbi desert inMarsabit County.Kenya’s Chalbi desert borders Lake Turkana, the largest desert lake in the country to the east.Although Marsabit and entire northern Kenya are very hot due to their arid nature, Chalbi Desert’s temperatures are way higher making it the hottest place in the country. But this does not take away the beauty of the great desert; it is coated in the scenic beauty of volcanoes and the remains of ancients lava flows. The population is scarce but over the years, people have learnt of its beauty.
                The volcanic mountains towering over the desert from afar have thousands of kilometre-long sand dunes that have become so attractive to travellers in and out of Kenya. From the horizon of the desert coarse sand covers pure rocks from the volcanic action that happened millions of years ago."
              />
              <Benefit
                image={marsabitNationalPark}
                title="marsabit national park"
                description="This small park, nestled on Mt Marsabit’s upper slopes, is coated in thick forest and contains a wide variety of wildlife, including leopards, elephants (some with huge tusks) and buffaloes. The dense forest makes spotting wildlife very difficult, but fortunately help is at hand in the form of a couple of natural clearings with semi-permanent lakes, where animal sightings are almost guaranteed."
              />
              <Benefit
                image={loyangalaniBeach}
                title="loyangalani beach"
                description="The Chogoria-sirimon route is our recommended and arguably the most magnificent ascent route to the summit area. It is the driest route up the mountain and the walk beside the Gorges Valley is truly spectacular.
                The descent by the Sirimon route takes one through some beautiful forest tracks and completes the traverse of the mountain"
              />
              <Benefit
                image={buffaloSprings}
                title="buffalo springs national reserve"
                description="As the story goes, Buffalo Springs is actually a bomb site from WWII. Italian fighter jets returning to Ethiopia mistook a large swath of buffalo drinking at the spring for British tents. So, they dropped a bomb. The result was a swimming hole.
                The rugged, hot and arid ‘badlands' of north-eastern Kenya are vast, magnificent and still largely unexplored in terms of safari holidays to Kenya. Constituting more than a third of Kenya's total land area, they are home to less than five per cent of her people; most of whom are hardy nomads. Buffalo Springs takes its name from the pools and springs of fresh."
              />
              <Benefit
                image={desertMuseum}
                title="loyangalani desert museum"
                description="Standing on a bluff above the lake several kilometres north of town, this museum covers the history and cultures of northern Kenya. The rooms contain lots of photo-heavy displays of the Nothern Kenya culture. Opening hours are basically whenever an interested person comes along. There is also accommodation available, which has the best views in Loyangalani."
              />
            </div>
          </section>
          {/* end of benefits */}
          <section className="route-details__section">
            <RouteDetails
              title="background information"
              description="Explore the Northern Kenya, Northern Kenya is one of the world’s last great wildernesses. This rugged, dusty land is rich in history, cultural heritage and isolated appeal and offers the most epic of adventures for the wild at heart. To explore the northern Kenya you need get off the trodden tourist tracks on this camping expedition to remote, isolated and wild parts of northern Kenya. Journey along rough African roads to picturesque Lake Turkana and the stark Chalbi Desert then lush Marsabit National Park and the game-rich Samburu National Reserve, travelling by 4x4 Land Cruiser or jeep"
            />

            <Image
              image={bgInfoImg}
              altText="The unspoiled beaches of lake Turkana"
              caption="The unspoiled beaches of lake Turkana"
            />

            <RouteDetails
              title="Samburu National Reserve"
              description="Samburu National Reserve is situated on the northern safari circuit of Kenya alongside Shaba and Buffalo Springs. This circuit is less visited due to its remote location in the north of Laikipia. The Samburu National Reserve was one of the two areas in which conservationists George and Joy Adamson raised Elsa the Lioness, made famous in the best-selling book and award-winning movie Born Free. Meandering through the heart of the park is the Ewaso Nyiro River. A green oasis of large doum palms and lush vegetation line the banks, breaking from the otherwise arid ecosystem and is a vital haven for wildlife."
            />

            <Image
              image={sasaabLodge}
              altText="Sasaab Lodge by Ewaso Nyiro River on Samburu"
              caption="Sasaab Lodge by Ewaso Nyiro River on Samburu"
            />

            <RouteDetails
              // title="Samburu National Reserve"
              description="Although your safari in Samburu takes you into pristine wilderness away from the city life, you can still enjoy the many qualities of an up-market luxurious accommodation in such inaccessibility. Samburu has some amazing hotels, specifically tented camps and lodges, located in distinct areas of the reserve. Samburu has some of the most luxurious safari camps in Africa. These camps tend to be small, boutique-type properties that are designed to merge into the surroundings and operate to the highest ecofriendly standards. Some of these luxury Tented Camps and Safari Lodges are international award winners. "
            />

            <Image
              image={elephantCrossing}
              altText="An elephant bull crossing Ewaso Nyiro River in Samburu"
              caption="An elephant bull crossing Ewaso Nyiro River in Samburu"
            />

            <RouteDetails
              description="Lodges in Samburu are designed to be closer to hotels while still retaining the feel, look and design on a property built in and created to enhance the joys of being in the wilderness. A well-designed lodge will share certain elements of a camp, with extensive use of local materials and use a design that blends the structure into the environment. Lodges tend to have larger common areas, likely include a swimming pool and have more rooms as well. The rooms themselves are more hotel-like in terms of design and comfort with a safari feel about them to reflect the location."
            />

            <Image
              image={elephantBedroomLodge}
              altText="Elephant bedroom lodge located in the heart of Samburu National Reserve."
              caption="Elephant bedroom lodge located in the heart of Samburu National Reserve."
            />


            {/* chalbi desert */}
            <RouteDetails
              title="CHALBI DESERT ON Northern KENYA"
              description="For the newly-wedded couples or those who could be oscillating midst rollercoasters of what feels like a series of survivable losses, Chalbi Desert is one of the most revitalizing havens to be in It is one of the most breathtaking natural features and best-known natural landmarks of emblematic stature in Northern Kenya. Chalbi desert is gaining admiration for being the most enchanted and pristine ecotourism attraction scenery, espousing the rarest visibility -- enhancing events to the lovers of nature and adventure. Chalbi Desert offers a perfect place for motorsports, wind sailing, camel derbies and caravans, filming, balloon flying and nature trips, among other adventures. Cursorily, there seems to be no sign of life in the desert while traversing it till you catch the marvels of guinea fowl, oryx, antelopes, ostrich or even the endangered Gravy zebras galloping across the great, shimmering whiteness or a few locals walking across the vast desert."
            />

            <Image
              image={chalbiMemories}
              altText="Chalbi desert, the home of unforgettable memories."
              caption="Chalbi desert, the home of unforgettable memories."
            />

            <RouteDetails
              description="Going on a Desert Safari in Kenya is not something we often hear. In fact, what exactly is a desert safari? A few lucky chaps who have been to Dubai may be quick to offer an explanation but even they may be a bit puzzled as to where this takes place in Kenya. All the same, it is a quick mental calculation to guess that most likely this kind of safari takes place in the northern region of the country. Ah, northern Kenya."
            />

            <Image
              image={rendilleCommunity}
              altText="Rendille community at the edge of chalbi desert"
              caption="Rendille community at the edge of chalbi desert"
            />

            <RouteDetails
              description="Unlike in Dubai, going on a desert safari in Kenya comes with game drives in the Lake Turkana National Park. To sum up such an experience, it is like having the deserts of Dubai and the Masai Mara in Kenya mashed up in one region. The crystal-clear streams that run into Lake Turkana are also a sight to behold.   Being one of the craziest natural phenomena around the globe, you will spot tourists taking selfies, photos of all sorts at the heart of the desert when it is not muddy while some flock to the neighbouring Kalacha springs, about 10km from the heart of the desert, to cool their body temperatures."
            />
            

            <RouteDetails
              title="Lake Turkana "
              description="If someone once promised you the moon they probably were alluding to a trip to Turkana. Why? Turkana region is a world-famous spot for observing solar eclipses due to its all-year-round clear skies.
              Lake Turkana also known as the Jade Sea, was originally named Lake Rudolph in 1888 and was renamed Lake Turkana in 1975. Lake Turkana is famous for its greenish-blue colours, hence the nickname the Jade Sea. It is the largest alkaline lake in the world. Lake Turkana is 300 Km long and 50 Km wide, which also makes it the largest lake in Kenya (although, Lake Victoria which is shared with Kenya, Tanzania and Uganda is larger). It is also the world's largest permanent desert lake. The water is potable, but not very palatable. Three rivers feed into the lake but there is no out flow, all water loss is via evaporation.. It resembles a boiling lake from afar with a series of dazzling mirages seen during daylight. It is an ocean of cracked soil stretching from one horizon to yet another."
            />

            <Image
              image={sunsetLakeTurkana}
              altText="unforgettable sunset at lake turkana"
              caption="unforgettable sunset at lake turkana"
            />

            <RouteDetails
              description="An abundance of fossils has been found in the area around Lake Turkana. Sibiloi National Park is known as “the cradle of mankind” as it is home to important archaeological sites such as Koobi Fora where fossils have led to a greater understanding of human evolution than any other site on the continent.Most recently archaeologists claim that they have unearthed the earliest evidence of warfare between hunter-gatherers to be scientifically dated, at a remote site in northern Kenya. The 10,000-year-old remains of 27 people found west of Lake Turkana show that they met violent deaths.
              Many experts have argued that conflict only came about as humans became more settled. These people, by contrast, were apparently nomadic hunter-gatherers."
            />

            <RouteDetails
              title="Meru national park"
              description="The Kenya Wildlife Service describes it as a ‘complete wilderness,’ and it is not hard to see why.  The park is a surprise at every turn, the Meru and Kora sister parks feature luxuriant jungle, coursing rivers, verdant swamp, khaki grasslands and gaunt termite cathedrals all under the sky’s great blue bowl. Little visited and utterly unspoilt, few places are comparable to the remote and rugged atmosphere found here. Visitors at Meru National Park can see lions, leopards, Gravy’s zebras, elephants, Bohor reedbucks, hartebeests, pythons, puff adders, cobras, buffalos and more than 427 recorded species of birds.  With so many rivers here, you need to bring your fishing rod with; relax on the river bank with some canapes and a good book. There are plenty of catfish, tilapia and barbell to catch. Or if you are feeling more energetic you can go on a guided walk to the top of Mughwango Hill, where you can enjoy uninterrupted 360-degree views, with Mount Kenya in the west to the vast Meru plains in the east."
            />

            <Image
              image={view}
              altText="The view of Meru national park from stunning Elsa's Kopje above the site of 
              George Adamson's original camp."
              caption="The view of Meru national park from stunning Elsa's Kopje above the site of 
              George Adamson's original camp."
            />

            <RouteDetails
              description="Despite being a complete wilderness, Meru National Park is on par with the rest of the parks when it comes to accommodation. Whether you are looking for 5-star accommodations or hoping to pitch a tent and be one with nature, this park offers you all options. Elsa’s Kopje, aptly named after the famed lioness, is perched atop the Mughwango Hill near George Adamson’s original camp. It offers breathtaking views that reach as far as the eye can see while showering guests in luxury. Rhino River Camp is another luxury camp set along the Kindani River. The lodge has large, canvas rooms that blend with the surroundings overlooking the river- making it one of the most romantic spots in the park."
            />

            <Image
              image={buffalo}
              altText="Portrait of buffalo in Meru national park kenya."
              caption="Portrait of buffalo in Meru national park kenya."
            />

            <RouteDetails
              description="For our clients working with a budget, KWS operates self-catering cottages and guest houses. There are plenty of campsites in various locations within the park available for a song.
              This majestic park has an interesting bit of history attached to it. It was home to Elsa, an orphaned lion cub that was brought up by conservationists George and Joy Adamson. This came to be when George shot and killed Elsa’s mother in self-defense, only to realize later that the lioness was protecting her three cubs. 
              After this incident, the Adamson’s took Elsa into their care to teach her how to hunt, hoping to release her back to the wild. The lion cub grew up and got three cubs of her own."
            />
          </section>
          <Footer />
        </>
      )}
    </div>
  );
};

export default NothernKenya;

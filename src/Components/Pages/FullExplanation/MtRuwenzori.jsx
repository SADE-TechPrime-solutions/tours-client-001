import React, { useState, useEffect } from "react";
import Heading from "../../Heading/Heading";
import HeroFE from "./Hero/Hero";
import RouteDetails from "./RouteDetails/RouteDetails";
import Image from "./Image/Image";
import Footer from "./Footer/Footer";

import imgbg from "./../../../Assets/images/client-images/ruwenzoribg.jpg";

import centralCircuit from "./../../../Assets/images/client-images/central-circuit.jpeg";
import magherita from "./../../../Assets/images/client-images/magherita-peak.jpeg";

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
            title="climb mount ruwenzori in 7 days."
            description="The Rwenzori Mountains National Park covers nearly 100,000 ha in western Uganda and comprises the main part of the Rwenzori mountain chain, which includes Africa's third highest peak (Mount Margherita: 5,109 m). The region's glaciers, waterfalls and lakes make it one of Africa's most beautiful alpine areas. The park has many natural habitats of endangered species and a rich and unusual flora comprising, among other species, the giant heather."
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
              image={centralCircuit}
              altText="Mount stanley with its peaks as seen from Stella Peak in Rwenzori Mountains in Uganda"
              caption="Mount stanley with its peaks as seen from Stella Peak in Rwenzori Mountains in Uganda"
            />

            <RouteDetails
              title="Kilembe trail"
              description="The Kilembe Trail is another option for hikers despite the fact that it is more challenging for hikers to get to the Margherita Peak than the Central Circuit Route. It is rough and complicated to win recommending all less experienced hikers not to take on this route. It is difficult and very steep making you use a lot of energy along the Hiking process. It is a very stunning route to take due to its outstanding beauty offering hikers a chance to explore more on the various paths/ trails they take as they ascend and descend the Mountain.
              The varying paths/ trails give you an opportunity to view the changing scenery which includes; the Forested Area, Rocky Areas, Boogy Environment as well as the Pristine Environment.
              For all avid Hikers, this should be your Route to the Margherita Peak due to its challenging experience. You will sleep in the cabins along the Mountain at various stops."
            />

            <Image
              image={magherita}
              altText="Margheritta peak, the highest point in Uganda."
              caption="Margheritta peak, the highest point in Uganda."
            />

            {/* <RouteDetails
              title="LEMOSHO ROUTE: HIGHLY RECOMMENDED"
              description="Lemosho is a relatively new route and it was designed to absorb some of the busier paths on the other two main routes of Machame and Marangu. The extra day and the slightly easier gradient through the forest makes it a slightly better option for acclimatisation. The first two days journeys through the Lemosho Glades, which is the rainforest that encircles the mountain at this altitude between 2400 and 3500 metres where you might see Colobus monkey, and plenty of birds on the giant camphorwood trees. The forest thins out and the path climbs onto the vast Shira Plateau which was created during the last eruption an estimated 50,000 years ago. The route then skirts the southern flanks of the mountain, with campsites at Barranco and Karanga Valley both at the same altitude which assist with acclimatisation. Then the path moves up to the final camp at Barafu (“ice” in Swahili) at 4600 metres which is the springboard for the big eight hour push up to the summit through the night. Lemosho is almost the same as Machame route in terms of the scenery with equally as distinctive ‘layers’ of habitat and ecosystems to journey through. The longer trail through the low level forest is particularly attractive and you are more likely to see some wildlife here than on the busier Machame side. The first camps at Mti Kubwa (Big Tree), Shira 1 and Moir Hut are quieter too, so there is a greater impression of remoteness and solitude."
            /> */}

            <h4 className="educational__subtitle">
              CLIMB MOUNT RUWENZORI IN 7 DAYS
            </h4>

            <h4 className="educational__subtitle">Day 1: Kampala to Kasese</h4>
            <p className="arrangements__description--text">
              Arrive in Kampala with the early morning flight at Entebbe
              Airport. Drive from Kampala in the morning and proceed to the
              western part of the country by passing through the
              Mityana-Fortportal kasese road, a 6-7 hour 372km drive .Stop over
              for lunch at Fortportal and proceed to the mountain base for the
              night. Gear sorting with the guide that afternoon.
            </p>

            <h4 className="educational__subtitle">
              Day 2: Nyakalengija to Nyabitaba Hut, 2,652 m.
            </h4>
            <p className="arrangements__description--text">
              Duration: 5-6 hours, 100om ascent In the morning after breakfast,
              you will be picked by your guide and then head to the Rwenzori
              Mountains National Park Head Quarter at Nyakalengija, 1,646 m.
              After a brief the hike starts through the plantations and homes of
              the Bakonzo, the people of the mountain, gradually reaching garden
              plots and elephants grass before joining the forest zone. You
              follow the Mubuku River, until crossing the Mahoma River. The
              trail passes through an open bracken fern slopes and a beautiful
              Forest canopy, up to Nyabitaba Hut, 2,652 m. which is the arrival
              point for the day. From the location, you are facing on the North
              the Portal Peaks 4,627m, and Mount Kinyangoma up ahead. During the
              day, you might see monkeys, the Rwenzori Turaco, three horned
              chameleons which is endemic in the Rwenzoris, common bulbul birds,
              yellow eyed tinkle birds, wood pecker, mountain elephants and
              hearing the voices of the chimpanzee, Kasese town.
            </p>

            <h4 className="educational__subtitle">
              Day 3: Nyabitaba Hut to John Matte Hut, 3,414 m.
            </h4>
            <p className="arrangements__description--text">
              Duration: 6-7 Hours walking, 760m Ascent From Nyabitaba Hut you
              cross the Kurt Shaffer Bridge, through a muddy area. Then the
              trail climbs up through the bamboo forest. After the Kurt Shaffer
              bridge the forest zone gives way to the bamboo/memolopsis zone up
              to Nyamuleju camp, an old climbing hut .This point marks the start
              of the heather zone where you will see the Ericaceous trees,
              everlasting flowers, giant lobelia and groundsel. You may also see
              red duikers, rock hyrax and white Columbus monkeys. The trail
              snakes through a bog full of typical plants along the Bujuku
              River. The final point is John Matte Hut. Enjoy the view of Mount
              Stanley and snow capped Margherita and Elena Peaks if the weather
              is clear.
            </p>

            <h4 className="educational__subtitle">
              Day 4: From John Matte Hut to Bujuku Hut, 3,962 m.
            </h4>
            <p className="arrangements__description--text">
              Duration: 4-5 Hours, 550m Ascent From John Matte Hut you cross the
              Bujuku River and enter the lower Bigo bog, a grassy bog where you
              spend time jumping from tussock to tussock. Currently, there is a
              constructed walk board on both lower and upper bigo bogs that
              makes a clear view of the mountain sceneries. This is the start of
              the alpine savannah zone with little vegetation. On the way,
              beautiful gardens of gaint lobelia, asanasio black berries, wild
              carrots, Alcamilla grace your paths. Also sighted is Lake Bujuku,
              sun birds, red duikers, rock hyrax and more. Depending on the
              weather, you may be able to view the peaks of Mount Stanley, Mount
              Baker and Mount Speke. Your stop for the day is at Bujuku Hut,
              3,962 m. From Bujuku, the trail for those intending to climb Mount
              Speke starts.
            </p>

            <h4 className="educational__subtitle">
              Day 5: Bujuku Hut – Elena Hut (4,541m).
            </h4>
            <p className="arrangements__description--text">
              Duration: 4 hours, Ascent 600m From Bujuku, the trail takes you
              through more bog, while climbing the steep slopes west of the lake
              and through the magical Groundsel Gully as it ascends to
              Scott-Elliot Pass at 4372m. At the head of the gully a metal
              ladder takes you over a steep section after which the trail is
              divided into two. The trail on your right leads up to Elena Hut
              and Mount Stanley on a steep trail over large boulders, while the
              trail on your left leads to Scott-Elliot Pass and down to
              Kitandara Lakes. Across the plains you may see the Mount Speke
              glacier on Victoria Emmanuel, Margerita peak on Mount Stanley and
              the nice view of Lake Bujuku, amazing rock path and so many
              others. Your stop for the night is the cool and often icy Icy
              Elena Hut., the trail for those intending to climb Mount Speke
              starts.
            </p>

            <h4 className="educational__subtitle">
              Day 6: Elena Hut – Margherita peak (5109m) and then Kitandara
            </h4>
            <p className="arrangements__description--text">
              Ascent: 7 hours walking, 1,500m Ascent Descent: 7 hours walking
              For those aiming for Margherita peak (5109m), continue to the base
              of the Stanley Glacier. To reach the summit of Margherita, the
              climb takes about 5-7 hours depending on the weather conditions
              and the pace of climbing. This tough walk takes you over three
              glaciers, slippery rock, ice and very exposed areas which are open
              on many sides. Note that this climb is for only physically fit and
              technical climbers. Climbing on to the glaciers, cross the Stanley
              Plateau and proceed with the ascent. Acclimatized to fog, altitude
              sickness and coolly weather, scramble up to the summit of
              Margherita the highest peak of the Rwenzoris. Return to Elena Hut
              and proceed down to Kitandara hut through Scott-Elliot pass, where
              there are spectacular views back to Bujuku Lake and Mount Speke,
              up to Mount Stanley and down to the Kitandara Lakes. Descend to
              the twin lakes of Kitandara for overnight at the Kitandara Hut.
              PS: If you arrive late at Elena an extra night is mandatory. Also
              we do not allow descent of any injured or unwell clients on the
              Kitandara side because rescue efforts are practically impossible
              with the terrain on this route. Request to descend on the normal
              route if tired and under the weather. There have been fatal
              descents on this route.
            </p>

            <h4 className="educational__subtitle">
              Day 7: Kitandara Hut to Guy Yeoman Hut, 3,261 m.
            </h4>
            <p className="arrangements__description--text">
              Duration: 7 hours From Kitandara, take on the trail that ascends
              steeply up the headwall, spreading out from the base of Mount
              Baker and continuing along the south side of the mountain to Fresh
              field Pass 4.282 m. At this point you can view into the Congo to
              the west and Mount Stanley to the north. From the pass, take on
              the long trail passing through bogy and slippery rocks that leads
              you to Bujongolo rock shelter the base camp for the historic
              expedition by the Duke of Abruzzi in 1906. The hut is surrounded
              by a beautiful landscape of mountains, vegetations dominated by
              the giant lobelias and rivers. Overnight at Guy yeoman.
            </p>

            <h4 className="educational__subtitle">
              Day 8: Guy Yeoman Hut back to Nyabitaba Hut, 2.652 m –
              Nyakalengija (Exit Camp)
            </h4>
            <p className="arrangements__description--text">
              Duration: 7-8 Hours In this day you complete the central circuit
              by going back to Nyabitaba Hut. The trial is attractive along the
              valley of the Mubuku and Kichuchu rivers, rich in plants and
              flowers of the heather zone before reaching the bamboo forest.
              Descend to Nyabitaba hut and proceed down to Nyakelginja unless if
              too tired where in that case you spend a night at Nyabitaba.
              Overnight at the base camp.
            </p>

            <h4 className="educational__subtitle">DAY 9 : Kasese -Kampala</h4>
            <p className="arrangements__description--text">
              In the morning, take breakfast and drive to Kampala either through
              Kasese-Fortportal road (372km) or Mbarara-Masaka road (422km) to
              reach Kampala /Entebbe for a flight back home in the evening. PS:
              For Bus alternative to Kampala please talk to us. You need to
              travel on 5th and back on 15th for this option.
              <h4 className="educational__subtitle">B. Physical fitness</h4>
              <p className="arrangements__description--text">
                Due to the nature of the exercise, you need to prepare your body
                well. It is recommended you do morning/evening jogs and other
                cardio based activities for the entire period for between 15 and
                30 minutes. This will help your breathing as well as your
                muscles.
              </p>
              <h4 className="educational__subtitle">C. Food & Snacks</h4>
              <p className="arrangements__description--text">
                Meals will be provided on the mountain, as well as basic snacks
                over the duration of the trip. However take note of the meals on
                transit in Kampala and Fort portal that are not provided in the
                package. These will be bought Ala-carte from the various
                restaurants available. Any special dietary requirements such as
                diabetic, vegetarian, lactose intolerant, non beef must be
                communicated in advance.Snacks to last the hike are recommended
                to substitute the main meals.
              </p>
              <h4 className="educational__subtitle">D. Climbing Gear</h4>
              <p className="arrangements__description--text">
                Majority of the climbing gear can be sourced by our team.
                Mandatory Requirements/Equipment/Gear No. Item Quantity Remarks
                (Tick if You Have/Mark ‘H’ if you would like to Hire) 1
                Backpack/rucksack for porters 1 Pc 2 Day pack Bag properly
                padded 1 Pc 3 Sleeping bag (-0 to -20 degrees) 1 Pair 4
                Waterproof Hiking Boots : Crampon Friendly 1 Pair 5
                Marvin/Balaclava /Warm Hat 1 Pc 6 Sunglasses 1 Pc 7 Insulated
                down jacket with hood medium to heavy weight 1 Pc 8 T-Shirts –
                Polyester quick dry. 4 Pcs 9 Hard shell jacket with hood
                breathable with front zip 1 Pc 10 Long Rain coat or Poncho 1 Pc
                11 Trekking pants 2 Pcs 12 Hard shell pants/Water proof 2 Pcs 13
                Warm wool hat (light and should cover ears) 1 Pc 14 Heavy woolen
                socks Liner socks- they caution against blisters 4 Pairs 15
                Gloves (Warm Ski gloves) 1 Pc 16 Hard shell mitts(1 pair should
                fit inside gloves) 1 Pc 17 Fleece 1-2 Pcs 18 Thermal underwear
                (Top & Bottom) 1-2 Pairs 19 Camelbak Hydration pack /Water
                bottles 3-4 liters total 20 Bathroom Kit (Recommended Wet Wipes,
                SunScreen (SPF 30 and above) 21 Headlamp with Extra Batteries 1
                Pcs 22 Personal First aid items/medicine if any 24 Sun Hat or
                cap (synthetic dries quickly ) 1 Pc 25 Snacks to last all days
                N/A 27 Snow gaiters to prevent water and rocks 1 pair 28
                Personal First Aid Kit 29 Disclaimer & Health self-assessment
                form submitted.30 Emergency evacuation cover 31
                Passport/National ID/Alien ID
              </p>
              <h4 className="educational__subtitle">ANCILLARY GEAR ITEMS</h4>
              <p className="arrangements__description--text">
                1 Camera 2 Power banks /extra batteries 3 Slim hot water flask 4
                Ankle support and knee support 5 Walking poles 6 Money for Crew
                Tips : Recommended $30/50 and above
              </p>
              <h4 className="educational__subtitle">E. Expedition Charges</h4>
              <p className="arrangements__description--text">
                The expedition rates are as follows:- Details Amount Climb
                Package USD 1500 Return Flights to EBB USD 250 Return Bus
                Transfer to KLA
              </p>
              <h4 className="educational__subtitle">Package Includes</h4>
              <p className="arrangements__description--text">
                All meals on the Mountain • Accommodation in budget
                accommodation at Fort portal • Accommodation in mountain huts •
                Statutory park Permits • Experienced English speaking Guides,
                chef and porters fees • Porters for supplies and your personal
                rucksack. • Transfer to Western Uganda (Shared cost as per group
                number )
              </p>
              <p className="arrangements__description--text">
              <h4 className="educational__subtitle">Package excludes</h4>
                • Technical Climb Gear (USD 80): Crampons ,Gum
                boots, 60m Dynamic Climbing Rope, Sitting Harness • Visa fees if
                Non East African • International yellow fever certificate • Tips
                for guides and porters. Ask recommended figures • Personal
                Climbing Gear as in “D” above • Water and Drinks (Though clean
                water is available for refills but you need to carry water
                purification tablets) • All transit meals in Kampala and Fort
                Portal. • Mt. Speke and Mt Baker peaks at $100 Extra each
              </p>
            </p>
          </section>
          <Footer />
        </>
      )}
    </div>
  );
};

export default MountRuwenzoriPage;

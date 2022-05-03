import React from "react";
// import Feature from "./Feature";
// import {
//   PaperPlane,
//   Star,
//   Fire,
//   ListIcon,
//   Phone,
//   Building,
// } from "../Icons/Icons";
import Heading from "../Heading/Heading";

const About = () => {
  // const features = [
  //   {
  //     icon: PaperPlane,
  //     title: "24/7 response",
  //     text: "we are always at your disposal each and everyday round the clock which means that anytime is a service order time at the comfort of your freetime.",
  //   },
  //   {
  //     icon: Star,
  //     title: "rated services",
  //     text: "Our tour services are receiving 5 stars rating from all over the world. We indeed don't fail when it comes to touring.",
  //   },
  //   {
  //     icon: Fire,
  //     title: "hot tour deals",
  //     text: "we have classic tour deals, we give upto 40% discount on coolest trips in the country, some of our tours are in fact free!",
  //   },
  //   {
  //     icon: ListIcon,
  //     title: "private guide",
  //     text: "We offer free private tour guides and self utilities guides like packing lists so that you get 100% success in your fun. All of these are free. Great right?",
  //   },
  //   {
  //     icon: Phone,
  //     title: "a call away",
  //     text: "we are just a phone call away, which means that at anytime, anywhere, with or without the internet, you can talk to us through: 0723476521",
  //   },
  //   {
  //     icon: Building,
  //     title: "physical offices",
  //     text: "we have physical offices in Kirinyaga county (main branch) and Mombasa (branch) so you can feel free to visit and resolve issues or lean more at anytime.",
  //   },
  // ];
  return (
    <section className="about" id="about">
      <div className="about__textual">
        <div className="u-center">
          <Heading
            subHeading="wilderness alternative expeditions"
            mainHeading="who are we"
            bgText="about us"
          />
        </div>
        <p className="about__description">
          At Wilderness Alternative Expedition, we take pride in putting you in
          the right place at the right time to maximise your wildlife
          encounters. This is at the heart of everything we do, at all levels of
          the business. Our team have lived, worked and travelled across the
          East Africa , and together we have the requisite knowledge and
          experience to plan the perfect safari for you. We work with some of
          the best guides in the tour industry; experts in the wilderness who
          have spent years working, living or researching in their chosen
          destination. From Mountaij guides to expert Safari guides, all of our
          expedition leaders have been carefully selected for their experience,
          personality and in-depth wildlife knowledge. our guides passion and
          enthusiasm for the natural world is contagious, and they enjoy nothing
          more than sharing their expertise with our guests
        </p>
        <div className="about__self-sale-container">
          <Heading
            subHeading=""
            mainHeading="why travel with wilderness alternative expeditions"
            bgText=""
          />
          <div className="about__features--container">
            <h4 className="about__title">accountability</h4>
            <p className="about__text">
              Since Wilderness Alternative Expedition was launched in 2014, we
              have been at the forefront of wildlife travel and constantly
              strived for ways in which we can directly support frontline
              conservation. We recognise that travel companies are not perfect
              models for conservation, yet it is part of our brand philosophy
              that we do our utmost to help those who are making a difference
              where possible. Travel is under the microscope for its
              environmental impact and travellers have a growing demand to
              travel with purpose. Recent sustainable travel research revealed
              almost three-quarters of travellers believe people need to act now
              and make sustainable travel choices. We believe the tourism
              industry needs to play a greater role in sustainable conservation
              and community uplift. Our bespoke and small group safaris aim to
              find the balance of effective conservation travel that benefits
              the communities, wildlife and the environments we all strive to
              protect, with seamless and enjoyable travel experiences. Often
              trips may still be all things luxury, but with a sustainable focus
              that gives back to the wilderness in some way. We aim to make
              travel relevant in a variety of ways. This may mean making a
              monetary contribution; normally to smaller projects.
              Alternatively, we’ll offer our time, skills and/or access to
              support a project. For example, offering to sponsor needy students
              or donating medical and sanitary equipment directly to
              marginalised communities surrounding Various National parks in the
              East African wilderness.
            </p>

            <h4 className="about__title">our team</h4>
            <p className="about__text">
              We pride ourselves on having the best guides on all of our
              safaris; from East African Bush and Coast, to the Highest Mountain
              In Africa. However, we also run a number of very specialist
              safaris throughout the East Africa, with real focusses, from fine
              art wildlife and landscape photography, to exploring with
              world-renowned, expert naturalists.   These safaris, we call them
              specialist led, give a unique twist on your safari experience, and
              are ideal for anyone with specific interests; be it photography or
              otherwise. They are led by people, Expert in their field, and
              sometime beyond, for their expertise, and amazing skills at
              sharing their knowledge
            </p>

            <h4 className="about__title">24/7 response</h4>
            <p className="about__text">
              As the sun rises over the African Bush and little birds announce a
              new day with songs of joy, the hyenas call each other home after a
              long night's work, and the lions broadcast a last lazy declaration
              of dominion over their kingdom. Their bellies are full, and the
              day's rest is about to begin. But the Pan the wilderness
              alternative Expedition team are wide awake, because they are on a
              special mission to make your African adventure one that you will
              never forget. Rooms are prepared, and mouth-watering meals are
              artfully brought into existence for when our guests return from
              exploring the exciting treasures of Africa with our professional
              guide. From the BIG 5, to the incredible fauna and flora, you
              always learn something on safari with our knowledgeable guides.
              But exciting adventures can be tiring and as the sun sets over the
              African Bush and the lion announces the start of the night shift,
              our wood fire is lit under the stars. For this is where the
              centuries-old tradition of telling stories combines your story
              with ours. This is where you are creating memories that will last
              forever, with people you love… We want to make every priceless
              moment count forever.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

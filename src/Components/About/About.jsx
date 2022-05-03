import React from "react";
import Feature from "./Feature";
import {
  PaperPlane,
  Star,
  Fire,
  ListIcon,
  Phone,
  Building,
} from "../Icons/Icons";
import Heading from "../Heading/Heading";
import bg1 from "./../../Assets/images/bg1.jpg";
import bg2 from "./../../Assets/images/bg2.jpg";

const About = () => {
  const features = [
    {
      icon: PaperPlane,
      title: "24/7 response",
      text: "we are always at your disposal each and everyday round the clock which means that anytime is a service order time at the comfort of your freetime.",
    },
    {
      icon: Star,
      title: "rated services",
      text: "Our tour services are receiving 5 stars rating from all over the world. We indeed don't fail when it comes to touring.",
    },
    {
      icon: Fire,
      title: "hot tour deals",
      text: "we have classic tour deals, we give upto 40% discount on coolest trips in the country, some of our tours are in fact free!",
    },
    {
      icon: ListIcon,
      title: "private guide",
      text: "We offer free private tour guides and self utilities guides like packing lists so that you get 100% success in your fun. All of these are free. Great right?",
    },
    {
      icon: Phone,
      title: "a call away",
      text: "we are just a phone call away, which means that at anytime, anywhere, with or without the internet, you can talk to us through: 0723476521",
    },
    {
      icon: Building,
      title: "physical offices",
      text: "we have physical offices in Kirinyaga county (main branch) and Mombasa (branch) so you can feel free to visit and resolve issues or lean more at anytime.",
    },
  ];
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
          As the sun rises over the African Bush and little birds announce a new
          day with songs of joy, the hyenas call each other home after a long
          night's work, and the lions broadcast a last lazy declaration of
          dominion over their kingdom. Their bellies are full, and the day's
          rest is about to begin. But the Pan the wilderness alternative
          Expedition team are wide awake, because they are on a special mission
          to make your African adventure one that you will never forget. Rooms
          are prepared, and mouth-watering meals are artfully brought into
          existence for when our guests return from exploring the exciting
          treasures of Africa with our professional guide. From the BIG 5, to
          the incredible fauna and flora, you always learn something on safari
          with our knowledgeable guides. But exciting adventures can be tiring
          and as the sun sets over the African Bush and the lion announces the
          start of the night shift, our wood fire is lit under the stars. For
          this is where the centuries-old tradition of telling stories combines
          your story with ours. This is where you are creating memories that
          will last forever, with people you love… We want to make every
          priceless moment count forever.
        </p>
        <div className="about__self-sale-container">
        <Heading
            subHeading=""
            mainHeading="why travel with wilderness alternative expeditions"
            bgText=""
          />
          <div className="about__features--container">
            {features.map((el, i) => (
              <Feature icon={<el.icon />} title={el.title} text={el.text} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

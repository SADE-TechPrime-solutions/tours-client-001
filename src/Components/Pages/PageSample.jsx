import React from "react";
import Navigation from "../Navigation/Navigation";
import Heading from '../Heading/Heading'
import TextBox from "./TextBoxes/TextBox";
import sampImg from '../../Assets/images/mnt2.jpg'

const PageSample = () => {
    const pageMountainHikeData = [
        {
            image: sampImg,
            title: 'HOW MUCH WILL YOU CARRY WHILE CLIMBING MOUNT KENYA WITH US ?',
            text: 'We run trips of different types on Mount Kenya. The general format is one where you carry virtually all of your own equipment in a true expedition style. In this situation, we will take only a handful of porters who will be available to carry items in an emergency and to act as additional support to the mountain guides. In this format, you will be carrying tents, sleeping bags & mats, food and personal clothing. This may add up to 10-15kg at first until you have eaten some of the food. Carrying all your own gear can be a tiring experience but it can greatly enhance the experience and the sense of achievement. We will keep the amount of equipment that we carry to an absolute (safe) minimum, we will arrange for secure storage of all other travel baggage in OUR Nyanyuki shop ready for your return.  '
        },
        {
            image: sampImg,
            title: '',
            text: 'In a second trip format, we can arrange to use porters to carry more of the gear. When using porters, they will carry the bags and the gear and the food, but you will be expected to carry a day sack with some of your own personal equipment which you need for the day such as water, spare clothes, camera and waterproofs. This is normally about 5 or 6 kilogram’s. Every person will have their own porter carrying their bag so nothing ever gets lost. We do not allow porters to carry more than 20kgs so please do not overfill your bags. They often carry bags on their heads, even rucksacks. We will also put your bags into waterproof sacks in case of rain.'
        },
        {
            image: sampImg,
            title: 'how do you keep in touch with home',
            text: 'Your mobile phone may work on parts of the mountain with a good line of sight to the towns below (slightly dependant on which network you are using) as long as you have roaming access. Please note you cannot charge batteries anywhere on the mountain. You may need to walk a little distance to find a spot with a signal. Also, do not expect to get 3G connection, mostly you will find it is text only.'
        },
        {
            image: sampImg,
            title: 'KEEPING DRY AND WARM',
            text: 'regions around the montane or forest level. Waterproofs are necessary; remember that on the equator the rainy season is traditionally April and September/October.Expect short-term extreme conditions, i.e. sharp showers of rain, hot sun, gusts of wind, snow and low night temperatures. Clear nights will be colder but more beautiful, and generally, the cloud builds up mid-morning, only to dissipate again with the setting sun. Up higher it will be colder and windier so the shell jacket is really vital; temperatures can drop dramatically, and there may be snow. Summit morning can be icy underfoot, and very cold (minus 10°C) so good boots with hats and gloves are important. Work on a ‘wet and dry’ system so that if your T-shirt gets wet during the day, you always have a dry T-shirt and warm top to change into the moment you get to camp. This is really important for morale if nothing else. Don\'t let people keep wet clothes on. It\'s such an obvious point but commonly ignored. '
        },
        {
            image: sampImg,
            title: 'WILDERNERSS ALTERNATIVE  DAILY ROUTINE',
            text: 'Generally, breakfast is between 7.30am and 8.00am, and departure from camp is at 9.00am. There is a lunch at midday, tea and biscuits around 4 pm and dinner at 7. pm. Summit morning is different; tea and biscuits at 11.30pm and start hiking at midnight or sometimes 1 am. The pace is slow and not forced at all. There is a rest at least once every hour and plenty of time to take photos, enjoy the view and chat. When you arrive at the huts you will find your bags ready to collect. In the morning, please have your bags packed before breakfast.Tips Wilderness alternative  is proud to pay excellent salaries. We are members of the the Ethical Tour Operators Group and the AITO Sustainable Tourism Committee. We also fulfil and exceed the International Porter Protection Group (IPPG) guidelines on porter safety.'
        },

        {
            image: sampImg,
            title: 'WHAT FITNESS DO YOU NEED WHLE CLIMBING MOUNT KENYA ?',
            text: 'To climb to Point Lenana on Mount Kenya you don\'t need to be a super-fit athlete or experienced mountaineer. The trek is accessible to anyone with good basic fitness and an enthusiasm for the outdoors. It will be an advantage to have good previous hill-walking experience and therefore be familiar with walking in the countryside for many hours at a time and there is no doubt that using Chogoria route on the ascent or descent is a more challenging option than the likes of Sirimon or Naro Moru. You will enjoy the trip all the more if you do have good fitness and experience. Therefore, we do advise that on the lead up to the trip you do spend time checking and working on the kind of fitness that you need for the trek. The ideal preparation is spending a good number of hours walking on rolling terrain with a small pack of about 5kg on your back. Other forms of cardio-vascular exercise such as running, cycling and swimming will also of course help with the right kinds of fitness, though especially if they focus mainly on the legs. All of our staff have climbed Mt Kenya many times so if you have any doubts or questions, do give us a call or email to discuss.    '
        },

        {
            image: sampImg,
            title: 'WHAT FITNESS DO YOU NEED WHLE CLIMBING MOUNT KENYA ?',
            text: 'To climb to Point Lenana on Mount Kenya you don\'t need to be a super-fit athlete or experienced mountaineer. The trek is accessible to anyone with good basic fitness and an enthusiasm for the outdoors. It will be an advantage to have good previous hill-walking experience and therefore be familiar with walking in the countryside for many hours at a time and there is no doubt that using Chogoria route on the ascent or descent is a more challenging option than the likes of Sirimon or Naro Moru. You will enjoy the trip all the more if you do have good fitness and experience. Therefore, we do advise that on the lead up to the trip you do spend time checking and working on the kind of fitness that you need for the trek. The ideal preparation is spending a good number of hours walking on rolling terrain with a small pack of about 5kg on your back. Other forms of cardio-vascular exercise such as running, cycling and swimming will also of course help with the right kinds of fitness, though especially if they focus mainly on the legs. All of our staff have climbed Mt Kenya many times so if you have any doubts or questions, do give us a call or email to discuss.    '
        },
    ]
    return(
        <React.Fragment>
            <Navigation />
            <div className="blog__container">
                <div className="blog__blog">
                    <Heading mainHeading="mount kenya" bgText="mount kenya" subHeading="learn about mount kenya" />
                    <h5 className="blog__title--sub">By the end of this blog you will be knowledgable to how to hike mountains and all that</h5>
                    {
                        pageMountainHikeData.map((el, i) => { return <TextBox image={el.image} title={el.title} text={el.text} key={i} shouldReverse={i % 2 === 0? true: false} /> } )
                    }
                    {/* <TextBox image={sampImg} title="how do you climb" text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo quisquam dolor, illo natus voluptas autem laudantium quibusdam veniam recusandae non quaerat eaque iure animi nulla enim! Id laudantium maxime aut! Commodi unde dolorem cumque quos inventore quam eveniet sunt id tempore quis, ut, quas placeat illum esse laboriosam doloribus odio fugit vel ducimus ipsum? Quisquam molestias asperiores aperiam, ad totam libero nulla numquam earum in quae optio quasi consequuntur veniam quod at sapiente reiciendis quis. Beatae eum facere delectus porro modi! Adipisci excepturi accusamus animi aliquam, illo corrupti magnam deleniti accusantium dicta autem ex. Explicabo corporis adipisci, voluptatibus eligendi eius ab aut distinctio! Repudiandae ducimus delectus, nesciunt eaque exercitationem maxime, excepturi error totam voluptatibus, sit sed vitae eligendi quasi beatae? Aspernatur dolore debitis, voluptate ratione ea accusamus praesentium dolor commodi dignissimos officia dolorem. Deleniti odit dolorum, obcaecati voluptas amet illo porro modi harum rem tempora perspiciatis ducimus veniam expedita necessitatibus." /> */}
                </div>
            </div>
        </React.Fragment>
    )
}

export default PageSample
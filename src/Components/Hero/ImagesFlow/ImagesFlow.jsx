import React from 'react';
import Marquee from "react-fast-marquee";
import TourImg from './TourImg';

import samp from './../../../Assets/images/vac1.jpg';
import samp2 from './../../../Assets/images/vac2.jpg';
import samp3 from './../../../Assets/images/vac3.jpg';
import mnt1 from './../../../Assets/images/mnt1.jpg';
import mnt2 from './../../../Assets/images/mnt2.jpg';
import mnt3 from './../../../Assets/images/mnt3.jpg';
const ImagesFlow = () => {
    const toursData = [
        {
            image: samp,
            title: 'Mt kenya heroes',
            description: 'A 10 day hike at mount kenya, you dont wanna miss this, we provide sure accomodations from airbnb, we also make sure that you connect with travelers from abroad'
        },
        {
            image: samp2,
            title: 'Mt ruwenzori heroes',
            description: 'A 10 day hike at mount kenya, you dont wanna miss this, we provide sure accomodations from airbnb, we also make sure that you connect with travelers from abroad'
        },
        {
            image: samp3,
            title: 'Mt kilimanjaro stars',
            description: 'A 10 day hike at mount kenya, you dont wanna miss this, we provide sure accomodations from airbnb, we also make sure that you connect with travelers from abroad'
        },
        {
            image: mnt1,
            title: 'Amboseli braveries',
            description: 'this group of tour kids went to Amboseli national park and made animal friends, you won\'t believe that they took a photo with lions.'
        },
        {
            image: mnt2,
            title: 'indian ocean divers',
            description: 'you may think Dan Brooks is the best diver in the world until you get a chance to travel with these guys to Indian ocean and see their diving depth.'
        },
        {
            image: mnt3,
            title: 'lake victoria stars',
            description: 'A 10 day hike at mount kenya, you dont wanna miss this, we provide sure accomodations from airbnb, we also make sure that you connect with travelers from abroad'
        },
    ]
    return(
        <Marquee gradient="false" direction="left" pauseOnHover="true" className='marquee'>
            {
                toursData.map((el, i) => <TourImg image={el.image} title={el.title} description={el.description} key={i} />)
            }
        </Marquee>
    )
}

export default ImagesFlow
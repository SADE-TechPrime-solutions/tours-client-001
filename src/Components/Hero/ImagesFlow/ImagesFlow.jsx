import React from 'react';
import Marquee from "react-fast-marquee";
import TourImg from './TourImg';

import amboselli from './../../../Assets/images/Amboselli-1.jpg';
import desertMesuem from './../../../Assets/images/Desert-museum.jpg';
import clientsClimbing from './../../../Assets/images/Clients-climbing.jpg';
import lakeMichaelSon from './../../../Assets/images/L-michaelson-2.jpg';
import wildernessFun from './../../../Assets/images/wilderness-fun.jpg';
import flamingo from './../../../Assets/images/L-Nakuru.jpg';
const ImagesFlow = () => {
    const toursData = [
        {
            image: amboselli,
            title: 'Amboselli national park',
            description: 'The national park has over 80 different mammals and over 400 bird species. Nature lovers who love the view of a mountain, Amboseli is the best place to be since Mount Kilimanjaro is the backdrop to the park. It is also home to the big five. You will love everything about Amboseli for its contemporary Maasai culture and their indigenous lifestyle.'
        },
        {
            image: desertMesuem,
            title: 'mount kenya',
            description: 'The highest peak on Mount Kenya is Batian at 5199m, the second highest peak is Nelion which is just 11 metres smaller (5188 m) and both these peaks are technical climbing peaks. Point Lenana is the third highest peak (4985m) and is the second highest trekking peak in Africa.'
        },
        {
            image: clientsClimbing,
            title: 'mount kilimanjaro',
            description: 'Thinking of climbing Mount Kilimanjaro with us? Kilimanjaro is not only Africa\'s tallest peak, but also the world\'s tallest free standing mountain. The summit, named Uhuru Point, is 5,895 meters (19,341 feet) above sea level. Most high mountains are part of ranges, such as Mount Everest\'s Himalayan Mountain Range.'
        },
        {
            image: lakeMichaelSon,
            title: 'the nothern kenya',
            description: 'Northern Kenya is one of the world\'s last great wildernesses. This rugged, dusty land is rich in history, cultural heritage and isolated appeal and offers the most epic of adventures for the wild at heart. Here, fiery desert plains give way to luscious jungles; bubbling oasis streams are set against imposing, glorious mountain ranges and black, volcanic lakeshores are trodden by some of the world\'s most remote tribes'
        },
        {
            image: wildernessFun,
            title: 'lake turkana',
            description: 'A safari to Lake Turkana? Their is nothing like Sunset in Lake Turkana,  also called lake Rudolf, fourth largest of the eastern African lakes. It lies mainly in northern Kenya, with its northern end stretching into Ethiopia. The lake lies in the eastern arm of eastern Africa\'s Rift Valley.'
        },
    ]
    return(
        <Marquee speed={80} gradient="false" direction="left" pauseOnHover="true" className='marquee'>
            {
                toursData.map((el, i) => <TourImg image={el.image} title={el.title} description={el.description} key={i} />)
            }
        </Marquee>
    )
}

export default ImagesFlow
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
            title: 'Amboselli',
            description: 'The might taks of Amboselli'
        },
        {
            image: desertMesuem,
            title: 'the desert museum',
            description: 'The Desert Museum in Chalbi Desert'
        },
        {
            image: clientsClimbing,
            title: 'clients climbing a mountain',
            description: 'Our clients climbing via the highest ferrate in the world from Austrian Hut to the summit'
        },
        {
            image: lakeMichaelSon,
            title: 'Lake michaelson',
            description: 'A view of the lake Michaelson on Mount Kenya'
        },
        {
            image: wildernessFun,
            title: 'having fun in the wilderness',
            description: 'Have wine and make fun with your friends in the wilderness. Travelling as a group is awesome.'
        },
        {
            image: flamingo,
            title: 'lake nakuru',
            description: 'Come have fun watching the flamingoes, such a nice sight to see the community of these of these birds.'
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
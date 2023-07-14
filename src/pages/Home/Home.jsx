import * as React from 'react';
import bgImage1 from '../../assets/bg-image-1.jpeg';
import bgImage2 from '../../assets/bg-image-2.jpeg';
import bgImage3 from '../../assets/bg-image-3.jpeg';
import styles from './Home.module.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Carousel from "nuka-carousel";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function Home() {

    // String[] imageList = [bgImage1+''];

    var settings = {
        dots: false,
        infinite: true,
        speed: 6000,
        slidesToShow: 1,
        slidesToScroll: 1
    };



    return (
        <div className={styles.sliderContainer}>
            {/* carousel docs : https://github.com/FormidableLabs/nuka-carousel */}
            <Carousel adaptiveHeight={true} autoplay={true} autoplayInterval={4000} withoutControls={true} wrapAround={true}>
                <img src={bgImage1} />
                <img src={bgImage2} />
                <img src={bgImage3} />
            </Carousel>
        </div>
    );
}
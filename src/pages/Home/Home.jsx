import * as React from 'react';
import bgImage1 from '../../assets/bg-image-1.jpeg';
import bgImage2 from '../../assets/bg-image-2.jpeg';
import bgImage3 from '../../assets/bg-image-3.jpeg';
import styles from './Home.module.css';
import Carousel from "nuka-carousel";


export default function Home() {

    return (
        <div className={styles.sliderContainer}>
            <Carousel adaptiveHeight={true} autoplay={true} autoplayInterval={4000} withoutControls={true} wrapAround={true}>
                <img src={bgImage1} />
                <img src={bgImage2} />
                <img src={bgImage3} />
            </Carousel>
        </div>
    );
}
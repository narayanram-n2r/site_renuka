import React from "react";
import { Fade,Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import '../css/SlideShow.css'

const fadeImages = [
  "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
  "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
  "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
];

const proprietes = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true
}


export default function App() {
  return (
    <div className="slide-container">
      <Slide style={{ width: '100%', height: 300 }} {...proprietes}>
        <div className="each-fade">
          <img src={fadeImages[0]} style={{ width: '100%', height: 300 }} />
        </div>
        <div className="each-fade">
          <img src={fadeImages[1]} style={{ width: '100%', height: 300 }} />
        </div>
        <div className="each-fade">
          <img src={fadeImages[2]}  style={{ width: '100%', height: 300 }}/>
        </div>
      </Slide>
    </div>
  );
}
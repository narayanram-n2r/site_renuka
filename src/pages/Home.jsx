import * as React from 'react';
import Button from '@mui/material/Button';
import '../css/Header.css';
import { Box } from '@mui/system';
import Slideshow from '../components/SlideShow';
import '../css/Pages.css';


export default function Home() {

    return (
        <div>
           <Slideshow></Slideshow>
           <Box className="home-content-container">
                <Box className="cup-container"> Cup Image</Box>
                <Box className="intro-container">Intro Container</Box>
                <Box className="ticker-container"> Ticker</Box>
           </Box>
        </div>
    );
}
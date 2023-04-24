import * as React from 'react';
import Button from '@mui/material/Button';
import logo from '../assets/ect_03.png';
import '../css/Header.css';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';


export default function Header(props) {

    const handleMenuChange = (event)=>{
        let menuOption = event.target.id;
        if( menuOption!=null ){
            props.onMenuChange(menuOption);
        }
    }
    return (
        <div>
            <Box className="menu-container" onClick={handleMenuChange}>
                <span id="home-menu" className='menu-option' >
                    Home
                </span>
                <span id="about-menu" className='menu-option'>
                    About Us
                </span>
                <span id="product-menu" className='menu-option'>
                    Products
                </span>
                <span id="client-menu" className='menu-option'>
                    Clients
                </span>
                <span id="quality-menu" className='menu-option'>
                    Quality
                </span>
                <span id="contact-menu" className='menu-option'>
                    Contact Us
                </span>
            </Box>

        </div>
    );
}
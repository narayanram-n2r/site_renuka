import * as React from 'react';
import Button from '@mui/material/Button';
import logo from '../../assets/ect_03.png';

import { Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
// import styled from '@emotion/styled'

import styles from './Header.module.css';


export default function Header(props) {

    const handleMenuChange = (event) => {
        let menuOption = event.target.id;
        if (menuOption != null) {
            props.onMenuChange(menuOption);
        }
    }
    return (

        <Box className={styles.headerMenuContainer} onClick={handleMenuChange}>
            <Stack direction="row" alignItems="center" justifyContent="center" style={{height:"100%"}}>
                <span id="home-menu" className={`${styles.menuOption} ${styles.hoverUnderlineAnimation} `}>
                    Home
                </span>
                <span id="about-menu" className={`${styles.menuOption} ${styles.hoverUnderlineAnimation} `}>
                    About Us
                </span>
                <span id="product-menu" className={`${styles.menuOption} ${styles.hoverUnderlineAnimation} `}>
                    Products
                </span>
                <span id="client-menu" className={`${styles.menuOption} ${styles.hoverUnderlineAnimation} `}>
                    Clients
                </span>
                <span id="quality-menu" className={`${styles.menuOption} ${styles.hoverUnderlineAnimation} `}>
                    Quality
                </span>
                <span id="contact-menu" className={`${styles.menuOption} ${styles.hoverUnderlineAnimation} `}>
                    Contact Us
                </span>
            </Stack>

        </Box>
    );
}
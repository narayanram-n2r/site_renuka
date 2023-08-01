import { Box, Button, List, ListItem, Stack, Typography } from '@mui/material';
import * as React from 'react';
import styles from './About.module.css';


const AboutContent = () => {
    return (
        <div>
            <h2>About Us</h2>
            <p>ElectroChem Technologies India was incorporated in 2012 at Chennai- ‘the automotive hub of India’-, to serve global electroplating and metal finishing industries by enhancing level of process technology. Current Indian plating industry has the potential to grow dramatically. We aim to speed up this growth by providing and delivering innovative, custom made, environment friendly products...</p>
            <p>Our team of trained and experienced personnel hailing from different domains is well versed in their respective domain. The team members have in excess of 25 years experience, both nationally and internationally in Metal Finishing & Surface Treatment.</p>
            <p>Our experienced personnel are involved in setting up a number of automotive industry standards.</p>
            <p>We are committed to provide environment friendly, world class cost effective quality process chemicals, project consultancy and execution of turn key projects.</p>
            <p>Our Corporate head quarters, Laboratory & Warehouse is located in the heart of Chennai’s industrial hub – Ambattur Industrial Estate.</p>
        </div>
    )
}

export default function About() {
    const [aboutMenu, setAboutMenu] = React.useState('about');
    const handleAboutMenu = (event) => {

        let menuId = event.target.id;
        if (menuId !== '') {
            setAboutMenu(menuId);
        }
    }
    return (

        <Stack direction="row" className={styles.aboutPageContainer}>
            <Stack className={styles.aboutUsSection} direction="column" alignContent="center" justifyContent="center" gap={2}>
                <Typography variant='h3'>About Us</Typography>
                <Box className={styles.objectiveContent}>
                    <p>Our team of trained and experienced personnel hailing from different domains is well versed in their respective domain. The team members have in excess of 25 years experience, both nationally and internationally in Metal Finishing & Surface Treatment.</p>
                    <p>Our experienced personnel are involved in setting up a number of automotive industry standards.</p>
                    <p>We are committed to provide environment friendly, world class cost effective quality process chemicals, project consultancy and execution of turn key projects.</p>
                    <p>Our Corporate head quarters, Laboratory & Warehouse is located in the heart of Chennai’s industrial hub – Ambattur Industrial Estate.</p>
                </Box>
            </Stack>
            <Stack className={styles.objectiveSection} direction="column" alignContent="center" justifyContent="center" gap={2}>
                <Typography variant='h3'>Objective</Typography>
                <Box className={styles.objectiveContent}>
                    <List sx={{
                        listStyleType: 'disc',
                        listStylePosition: 'inside'
                    }}>
                        <ListItem sx={{ display: 'list-item' }}>The promoters are having more than 25 years experience in the field and well known to the Indian metal finishing industry.</ListItem>
                        <ListItem sx={{ display: 'list-item' }}> Best value for money to Customers</ListItem>
                        <ListItem sx={{ display: 'list-item' }}> Customer oriented Focus</ListItem>
                        <ListItem sx={{ display: 'list-item' }}> Beat the Competition by Technology</ListItem>
                        <ListItem sx={{ display: 'list-item' }}> Set our own Standards of Service</ListItem>
                        <ListItem sx={{ display: 'list-item' }}> Transparent Operation</ListItem>
                    </List>
                </Box>
            </Stack>

        </Stack >
    );
}
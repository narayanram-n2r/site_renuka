import { Button } from '@mui/material';
import * as React from 'react';
import '../css/Header.css';
import '../css/Pages.css';


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

const objectiveContent = () => {
    return (
        <div>
            <h2>Objective</h2>
            <ul>
                <li>New Company – Fresh Outlook : The promoters are having more than 25 years experience in the field and well known to the Indian metal finishing industry.</li>
                <li>Best value for money to Customers</li>
                <li>Focus on OEM – Named Accounts & Top to Down approach</li>
                <li>Customer oriented Focus</li>
                <li>Beat the Competition by Technology</li>
                <li>Set our own Standards of Service</li>
                <li>Service Engineers / Channel Partners with Technical Service Facilities in all major automotive hubs in India</li>
                <li>Transparent Operation</li>
                <li>Authorized Plating Shops in Major Locations</li>
            </ul>
            <h3>We Create Our Value Systems based on:</h3>
            <ul>
                <li>Environment</li>
                <li>Technology</li>
                <li>Customer</li>
                <li>Society</li>
                <li>Principles Interest</li>
            </ul>
        </div>
    )
}

export default function AboutUs() {
    const [aboutMenu, setAboutMenu] = React.useState('about');
    const handleAboutMenu = (event) => {

        let menuId = event.target.id;
        if (menuId !== '') {
            setAboutMenu(menuId);
        }
    }
    return (
        <div className='about-page-container' onClick={handleAboutMenu}>
            <div className='about-options-container'>
                <Button variant='contained' className='about-option' sx={{
                    marginTop: 3
                }} id="about">ABOUT US</Button>
                <Button variant='contained' className='about-option' sx={{
                    marginTop: 3
                }} id="objective">OBJECTIVES</Button>
                <Button variant='contained' className='about-option' sx={{
                    marginTop: 3
                }} id="indianMarket">INDIAN MARKET</Button>
            </div>
            <div className='about-body'>
                {aboutMenu == 'about' && AboutContent()}
                {aboutMenu == 'objective' && objectiveContent()}
            </div>
        </div>
    );
}
import * as React from 'react';
import '../css/Header.css';
import '../css/Pages.css';

import styled from '@emotion/styled'
import { Button, Divider, FormControl, TextField } from '@mui/material';

const HalfSection = styled.div`
    width : 50%;
    display : flex;
    flex-direction : column;
    justify-contents : center;
    align-items : center;
    gap : 20px;
`

const ContactContainer = styled.div`
    display : flex;
    position : relative;
    width : 100%;
    height : calc( 100% - 100px );
    justify-contents : center;
    align-items : center;
`


export default function Home() {

    return (
        <ContactContainer>
            <HalfSection>
                <TextField label="Email" />
                <TextField label="Subject" />
                <TextField label="Description" multiLine={true} />
                <Button variant='contained'>Contact Us</Button>
            </HalfSection>
            <Divider orientation="vertical" flexItem></Divider>
            <HalfSection>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.825519035866!2d80.16061617582793!3d13.110237411822089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5263042847b187%3A0x3301fa62d47f5cc7!2sRENUKA%20ELECTROPLATINGS!5e0!3m2!1sen!2sus!4v1682289256176!5m2!1sen!2sus" width="350" height="350" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </HalfSection>
        </ContactContainer>
    );
}
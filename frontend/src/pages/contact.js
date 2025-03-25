import React from 'react';
import { Container, Grid, Box, Typography, Link, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import styled from 'styled-components';
import Nav from './navbar';

const ContactUs = () => {
    return (
        <section id='contact'>
      
        <StyledContainer>
          <Nav/>
            <Typography variant="h4" gutterBottom>
                Contact Us
            </Typography>
            <Grid container spacing={4}>
                {/* Emails Section */}
                <Grid item xs={12} md={4}>
                    <ContactBox>
                        <Typography variant="h6" gutterBottom>
                            Emails
                        </Typography>
                        <List>
                            <ContactItem
                                icon={<EmailIcon />}
                                text="naudiyalmohan@gmail.com"
                                link="mailto:naudiyalmohan@gmail.com"
                            />
                            <ContactItem
                                icon={<EmailIcon />}
                                text="aryangoel@gmail.com"
                                link="mailto:aryangoel@gmail.com"
                            />
                            <ContactItem
                                icon={<EmailIcon />}
                                text="abhaypal@gmail.com"
                                link="mailto:abhaypal@gmail.com"
                            />
                        </List>
                    </ContactBox>
                </Grid>
                {/* Mobile Section */}
                <Grid item xs={12} md={4}>
                    <ContactBox>
                        <Typography variant="h6" gutterBottom>
                            Mobile
                        </Typography>
                        <List>
                            <ContactItem
                                icon={<PhoneIcon />}
                                text="+91 7906637663"
                                link="tel:+917906637663"
                            />
                            <ContactItem
                                icon={<PhoneIcon />}
                                text="+91 8650714015"
                                link="tel:+918650714015"
                            />
                        </List>
                    </ContactBox>
                </Grid>
                {/* LinkedIn Section */}
                <Grid item xs={12} md={4}>
                    <ContactBox>
                        <Typography variant="h6" gutterBottom>
                            LinkedIn Profiles
                        </Typography>
                        <List>
                            <ContactItem
                                icon={<LinkedInIcon />}
                                text="Aryan Goel"
                                link="https://www.linkedin.com/in/aryangoel/"
                            />
                            <ContactItem
                                icon={<LinkedInIcon />}
                                text="Abhay Pal"
                                link="https://www.linkedin.com/in/abhaypal-214853245/"
                            />
                            <ContactItem
                                icon={<LinkedInIcon />}
                                text="Mohan Naudiyal"
                                link="https://www.linkedin.com/in/Mohannaudiyal-7484651ba/"
                            />
                        </List>
                    </ContactBox>
                </Grid>
            </Grid>
        </StyledContainer>
        </section>
    );
};

export default ContactUs;

/* Styled Components */
const StyledContainer = styled(Container)`
    margin-top: 80px; /* Adjust top margin */
    padding: 24px;
    text-align: center;
`;

const ContactBox = styled(Box)`
    text-align: left;
`;

const ContactItem = ({ icon, text, link }) => (
    <ListItem disablePadding>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText
            primary={
                <Link href={link} target="_blank" rel="noopener noreferrer" underline="hover">
                    {text}
                </Link>
            }
        />
    </ListItem>
);

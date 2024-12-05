import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Container, Grid, Box, Button, Typography } from '@mui/material';
import styled from 'styled-components';
import Students from "../assets/students.svg";
import { LightPurpleButton } from '../components/buttonStyles';
import Nav from './navbar';

const Homepage = () => {
    return (
        <>
            <Nav/>
            <StyledContainer>
                <Grid container spacing={4} alignItems="center">
                    {/* Left Side - Image */}
                    <Grid item xs={12} md={6}>
                        <img
                            src={Students}
                            alt="Illustration of students collaborating"
                            style={{ width: '100%', maxHeight: '500px', objectFit: 'contain' }}
                        />
                    </Grid>
                    {/* Right Side - Text and Actions */}
                    <Grid item xs={12} md={6}>
                        <StyledBox>
                            <Typography variant="h2" component="h1" gutterBottom>
                                Welcome to
                                <br />
                                M S Memorial Public School
                            </Typography>
                            <Typography variant="body1" color="textSecondary" paragraph>
                                Streamline school management, organize classes, and manage students and faculty with ease.
                                Track attendance, assess performance, and provide feedback effortlessly.
                                Access records, view grades, and communicate seamlessly.
                            </Typography>
                            <ButtonContainer>
                                <StyledLink to="/choose">
                                    <LightPurpleButton
                                        variant="contained"
                                        fullWidth
                                        aria-label="Login to your account"
                                    >
                                        Get Started
                                    </LightPurpleButton>
                                </StyledLink>
                               
                            </ButtonContainer>
                            <Typography variant="body2" color="textSecondary">
                                Don’t have an account?{' '}
                                <Link to="/Adminregister" style={{ color: "#7f56da" }}>
                                    Sign up
                                </Link>
                            </Typography>
                        </StyledBox>
                    </Grid>
                </Grid>
            </StyledContainer>
        </>
    );
};

export default Homepage;

/* Styled Components */


const StyledContainer = styled(Container)`
    display: flex;
    justify-content: center;
    align-items: center;
    height: calc(100vh - 64px); /* Adjusted for Navbar height */
    padding: 16px;
    margin-top :40px ;
`;

const StyledBox = styled(Box)`
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 24px;
`;

const ButtonContainer = styled(Box)`
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin: 24px 0;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
`;

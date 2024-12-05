import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { LightPurpleButton } from '../components/buttonStyles';
import { AppBar, Toolbar, Container, Grid, Box, Button, Typography } from '@mui/material';
// import {} from 'react-router-dom';


const Nav = () => {
  return (
    <Navbar>
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    M S Memorial Public School
                    </Typography>
                    <StyledNavLink to="/">
                        Home
                    </StyledNavLink>
                    <StyledNavLink to="/about">
                        About
                    </StyledNavLink>
                    <StyledNavLink to="/ContactUs">
                        Contact
                    </StyledNavLink>
                    <StyledNavLink to="/choose">
                        Login
                    </StyledNavLink>
                    
                </Toolbar>
            </Navbar>
  );
};

const Navbar = styled(AppBar)`
    background-color: #7f56da;
    padding: 1px 10px;
    
`;

const StyledNavLink = styled(Link)`
    color: white;
    text-decoration: none;
    margin: 0 16px;
    font-size: 1rem;
    &:hover {
        text-decoration: underline;
    }
`;

const StyledContainer = styled(Container)`
    display: flex;
    justify-content: center;
    align-items: center;
    height: calc(100vh - 64px); /* Adjusted for Navbar height */
    padding: 16px;
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


export default Nav;

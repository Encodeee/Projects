import React from 'react';
import AstonLogo from '/AstonLogo.svg';
import NavBar from './NavBar';
import styled from 'styled-components';

const StyledHeader = styled.div`
    display: flex;
`

const Header = () => {
    return (
        <StyledHeader>
            <img src={AstonLogo} alt="AstonLogo" />
            <NavBar />
        </StyledHeader>
    );
};

export default Header;
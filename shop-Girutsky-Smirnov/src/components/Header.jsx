import React from 'react';
import AstonLogo from '/AstonLogo.svg';
import NavBar from './NavBar';
import styled from 'styled-components';

const StyledHeader = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    & > :first-child {
    margin: 30px 350px 30px 50px;
  }
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
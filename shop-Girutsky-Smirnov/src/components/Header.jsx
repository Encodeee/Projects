import React from 'react';
import AstonLogo from '/AstonLogo.svg';
import NavBar from './NavBar';
import styled from 'styled-components';

const StyledHeader = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    & > :first-child {
    margin-right: 500px;
    margin-left: 50px;
    margin-top: 10px;
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
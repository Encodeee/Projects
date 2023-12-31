import React from 'react';
import styled from 'styled-components';
import { ABOUT_ROUTE, CONTACTS_ROUTE, HOME_ROUTE, TASKS_ROUTE, VACANCIES_ROUTE } from '../utils/consts';
import { NavLink } from 'react-router-dom';

const StyledNavBar = styled.div `
display: flex;
justify-content: center;
align-items: center;
flex-direction: row;
gap: 55px;
margin-top: 20px;
`

const StyledFirstNavLink = styled(NavLink)`
text-decoration: none;
color: #000;

&:before {
    content: '[';
    color: #ff0000; 
    margin-right: 8px; 
}

&:after {
    content: ']';
    color: #ff0000; 
    margin-left: 8px; 
}   
`
const StyledNavLink = styled(NavLink)`
text-decoration: none;
color: #000;
`




const NavBar = () => {
    return (
        <StyledNavBar>
                <StyledFirstNavLink to={HOME_ROUTE}>
                    Услуги
                </StyledFirstNavLink>
            
                <StyledNavLink to={TASKS_ROUTE}>
                    Выполненные проекты
                </StyledNavLink>
            
                <StyledNavLink to={ABOUT_ROUTE}>
                    О Компании
                </StyledNavLink>
            
                <StyledNavLink to={VACANCIES_ROUTE}>
                    Вакансии
                </StyledNavLink>

                <StyledNavLink to={CONTACTS_ROUTE}>
                    Контакты
                </StyledNavLink>
            
        </StyledNavBar>
    );
};

export default NavBar;
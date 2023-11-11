import React from 'react';
import styled from 'styled-components';
import { ABOUT_ROUTE, CONTACTS_ROUTE, SERVICES_ROUTE, TASKS_ROUTE, VACANCIES_ROUTE } from '../utils/consts';
import { NavLink } from 'react-router-dom';

const StyledNavBar = styled.div `
display: flex;
justify-content: center;
align-items: center;
flex-direction: row;
gap: 15px;
`



const NavBar = () => {
    return (
        <StyledNavBar>
            <div>
                <NavLink to={SERVICES_ROUTE}>
                    Услуги
                </NavLink>
            </div>
            <button>
                <NavLink to={TASKS_ROUTE}>
                    Выполненные проекты
                </NavLink>
            </button>
            <button>
                <NavLink to={ABOUT_ROUTE}>
                    О Компании
                </NavLink>
            </button>
            <button>
                <NavLink to={VACANCIES_ROUTE}>
                    Вакансии
                </NavLink>
            </button>
            <button>
                <NavLink to={CONTACTS_ROUTE}>
                    Контакты
                </NavLink>
            </button>
        </StyledNavBar>
    );
};

export default NavBar;
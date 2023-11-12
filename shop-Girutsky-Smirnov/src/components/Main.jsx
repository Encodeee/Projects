import React from 'react';
import styled from 'styled-components';
import Title from './ui/Title';

const StyledWrapper = styled.div`
background-image: url('../BackMain.png');
background-size: auto 839px; 
background-position: start center; 
height: 2000px;
background-repeat: no-repeat;
`

const StyledShortInfo = styled.div`
display: flex;
justify-content: flex-start;
align-items: center;
padding: 190px 60px;
`


const Main = () => {
    return (
        <StyledWrapper>
            <StyledShortInfo>
                <Title color={'white'}>
                    Проектирование <br/> и строительство <br/> инженерных систем
                </Title>
            </StyledShortInfo>
        </StyledWrapper>
    );
};

export default Main;
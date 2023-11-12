import React from 'react';
import styled from 'styled-components';


const StyledLargeButton = styled.button`
width: 445px;
height: 120px;
background-color: #F83D3D;
color: white;  
border: none; 
&:hover{
    box-shadow: 0px 6px 14px 0px #F83D3D;
}
&:active{
    color: black;
}
`

const LargeButton = () => {
    return (
        <StyledLargeButton>
        Отправить
    </StyledLargeButton>
    );
};

export default LargeButton;
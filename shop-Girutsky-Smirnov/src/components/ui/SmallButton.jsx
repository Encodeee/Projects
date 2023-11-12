import React from 'react';
import styled from 'styled-components';


const StyledSmallButton = styled.button`
width: 265px;
height: 105px;
background-color: black;
color: white;  
border: none; 

&:hover{
    box-shadow: 0px 4px 10px 0px #00000091;
}
&:active{
    color:#F83D3D;
}
`


const SmallButton = () => {
    return (
        <StyledSmallButton>
            Отправить
        </StyledSmallButton>
    );
};

export default SmallButton;
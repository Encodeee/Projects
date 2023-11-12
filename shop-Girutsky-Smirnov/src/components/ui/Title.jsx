import React from 'react';
import styled from 'styled-components';

const StyledTitle = styled.h1`
color: ${props => props.color || 'black'};
font-weight: bold;
font-size: 80px;
`

const Title = (props) => {
    return (
        <StyledTitle {...props} />
    ); 
};

export default Title;
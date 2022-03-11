import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
margin: 25px;
box-shadow: rgba(0, 0, 0, 0.5) 1.95px 1.95px 2.6px;
border-radius: 25px;
background-color:white;
`

const Container = (props) =>(
    <StyledContainer>
        {props.children}
    </StyledContainer>
)

export default Container;
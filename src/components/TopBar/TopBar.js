import React from "react";
import styled from "styled-components";

const StyledTopBar = styled.div`
color: white;
font-size: 32px;
background: rgb(197,93,234);
background: linear-gradient(135deg, rgba(197,93,234,1) 0%, rgba(72,162,245,1) 50%, rgba(72,245,193,1) 100%);
width: 100%;
height: 60px;
display: flex;
justify-content: center;
align-items:center;
box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
margin-bottom: 30px;
`

const TopBar = () =>(
    <div>
        <StyledTopBar>
            Airports
        </StyledTopBar>
    </div>
)
export default TopBar;
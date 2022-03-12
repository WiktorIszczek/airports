import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { airports } from "data/airportsList";
import Container from "components/Container/Container";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
`;
const Selector = styled.div`
  min-width: 200px;
  margin: 10px;
`;
const Select = styled.select`
  font-size: 20px;
  width: 100%;
  border: none;
  &:focus {
    outline: none;
    color: black;
  }
`;

const PortSelector = ({doBFS}) => {
  const [startPort="ATH",setStartPort] = useState();
  const [endPort="ATH",setEndPort] = useState();
  const MakeItem = (x) => {
    return (
      <option key={x} value={x}>
        {x}
      </option>
    );
  };
  useEffect(() => {
    doBFS(startPort,endPort)
}, [startPort, endPort])

  return (
    <Wrapper>
      <Container>
        <Selector>
          <Select onChange={(e)=>setStartPort(e.target.value)}>
            {airports.map(MakeItem)}
          </Select>
        </Selector>
      </Container>
      <Container>
        <Selector>
        <Select onChange={(e)=>setEndPort(e.target.value)}>
            {airports.map(MakeItem)}
          </Select>
        </Selector>
      </Container>
    </Wrapper>
  );
};
export default PortSelector;

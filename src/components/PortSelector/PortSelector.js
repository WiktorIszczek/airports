import React, {useRef} from "react";
import styled from "styled-components";
import { airports } from "data/airportsList";
import Container from "components/Container/Container";
import { BreadthFirstSearch } from "scripts/breadthFirstSearch";

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

const PortSelector = () => {
  const startPort = useRef()
  const endPort = useRef()
  const MakeItem =(x)=> {
    return (
      <option key={x} value={x}>
        {x}
      </option>
    );
  }
  const doBFS = () => {
    console.log(BreadthFirstSearch(startPort.current.value,endPort.current.value))
  };
  return (
    <Wrapper>
      <Container>
        <Selector>
          <Select ref={startPort} onChange={doBFS}>{airports.map(MakeItem)}</Select>
        </Selector>
      </Container>
      <Container>
        <Selector>
          <Select  ref={endPort} onChange={doBFS}>{airports.map(MakeItem)}</Select>
        </Selector>
      </Container>
    </Wrapper>
  );
};
export default PortSelector;

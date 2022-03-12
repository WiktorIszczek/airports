import React from "react";
import Container from "components/Container/Container";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
  & > div{
    padding:20px;
}
`;
const MakeItem = (x) => {
  return (
    <li key={x} value={x}>
      {x}
    </li>
  );
};
const PathList = ({pathPort}) => (
  <Wrapper>
    <Container>
      <ol>
    {pathPort.map(MakeItem)}
      </ol>
      </Container>
  </Wrapper>
);
export default PathList;

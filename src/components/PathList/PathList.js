import React from "react";
import Container from "components/Container/Container";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
  & > div {
    padding: 20px;
  }
`;

const List = styled.ol`
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style-type: none;
  padding: 10px;
  margin:10px;
  min-width: 200px;
`;


const ListImer = styled.li`
  &:first-child,
  :last-child {
    color: rgba(72, 162, 245);
    font-size: 30px;
  }
  &:last-child {
    color: rgba(197, 93, 234);
  }
`;

const MakeItem = (x) => {
  return (
    <ListImer key={x} value={x}>
      {x} 
    </ListImer>
  );
};

const PathList = ({ pathPort }) => {

return(
  <Wrapper>
    <Container>
      <div>
      Number of airports visited: {pathPort.length}
      </div>
      <div>
      Number of tickets needed: {pathPort.length-1 > 0 ? pathPort.length-1 : 0}
      </div>
      <div>
      Interchanges: {pathPort.length-2 > 0 ? pathPort.length-2 : 0}
      </div>
      <List>{pathPort.map(MakeItem)}</List>
    </Container>
  </Wrapper>
);
} 
export default PathList;

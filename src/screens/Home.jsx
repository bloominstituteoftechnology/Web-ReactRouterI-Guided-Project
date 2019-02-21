import React from 'react';
import styled from 'styled-components';


const StyledHome = styled.div`
  background-color: pink;
`;

export default function Home({ }) {
  return (
    <StyledHome>
      <h3>Home</h3>
    </StyledHome>
  );
}

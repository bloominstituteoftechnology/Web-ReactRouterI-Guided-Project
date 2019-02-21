import React from 'react';
import styled from 'styled-components';


const StyledAbout = styled.div`
  background-color: green;
  margin-top: 20px;
  padding: 20px;
`;

export default function About({ }) {
  return (
    <StyledAbout>
      <h3>About</h3>
    </StyledAbout>
  );
}

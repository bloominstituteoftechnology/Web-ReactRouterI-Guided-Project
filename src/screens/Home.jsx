import React from 'react';
import styled from 'styled-components';

const StyledHome = styled.div`
  background-color: pink;
  margin-top: 20px;
  padding: 20px;
`;

export default function Home({ history, match, location }) {
  console.log(history);
  console.log(match);
  console.log(location);

  return (
    <StyledHome>
      <h3>Home</h3>
      <button onClick={history.goBack}>Go Back</button>
      <button onClick={() => history.push('/blog')}>Go To Blog</button>
    </StyledHome>
  );
}

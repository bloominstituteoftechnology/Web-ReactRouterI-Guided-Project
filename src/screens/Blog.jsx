import React from 'react';
import styled from 'styled-components';
import { Route, Link } from 'react-router-dom';


const StyledBlog = styled.div`
  background-color: lightcoral;
  margin-top: 20px;
  padding: 20px;
`;

const Greet = ({ name }) => <h1>hello, {name}</h1>;

export default function Blog({ match }) {
  return (
    <StyledBlog>
      <h3>Blog</h3>

      <Route path={`${match.url}/greet`} component={() => <Greet name='Luke' />} />

      <Link to={`${match.url}/greet`}>Vamos a gaga</Link>

    </StyledBlog>
  );
}

import React from 'react';
import styled from 'styled-components';
import { Route, Link, Switch } from 'react-router-dom';


const StyledBlog = styled.div`
  background-color: lightcoral;
  margin-top: 20px;
  padding: 20px;
`;

const Greet = ({ name }) => <h1>hello, {name}</h1>;
const Goodbye = ({ name }) => <h1>goodbye, {name}</h1>;
const TakeCare = ({ name }) => <h1>take care, {name}</h1>;

export default function Blog({ match }) {
  return (
    <StyledBlog>
      <h3>Blog</h3>

      <Switch>
        <Route path={`${match.url}/greet`} component={() => <Greet name='Luke' />} />
        <Route path={`${match.url}/takecare`} component={() => <TakeCare name='Gabe' />} />
        <Route path={`${match.url}/goodbye`} component={() => <Goodbye name='Tom' />} />
        <Route component={() => <div>404 error</div>} />
      </Switch>

      <Link to={`${match.url}/greet`}>Greet</Link>
      <Link to={`${match.url}/takecare`}>Take Care</Link>
      <Link to={`${match.url}/goodbye`}>Goodbye</Link>

    </StyledBlog>
  );
}

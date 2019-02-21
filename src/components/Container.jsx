import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import Home from '../screens/Home';
import Blog from '../screens/Blog';
import About from '../screens/About';


const StyledContainer = styled.div`
  padding: 10px;
  background-color: yellow;
  height: 100%;
`;

export default function Container() {
  return (
    <Router>
      <StyledContainer>
        <nav>
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/blog'>Blog</Link>
        </nav>
        <>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/blog" component={Blog} />
        </>

      </StyledContainer>
    </Router>
  );
}

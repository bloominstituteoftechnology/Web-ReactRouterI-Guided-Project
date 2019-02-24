import React from 'react';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import SectionPlain from './Section';


const StyledContainer = styled.div`
  padding: 20px;
  height: 100%;

  nav {
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
  }
`;

const Section = withRouteMatching(SectionPlain);

export default function Container() {
  return (
    <StyledContainer>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/blog'>Blog</Link>
        <Link to='/other'>Other</Link>
      </nav>

      <Section
        path='/'
        color='#4286f4'
        heading='Home'
        content='This is home.'
      />

      <Section
        path='/about'
        color='#ed6d2d'
        heading='About'
        content='This is about.'
      />

      <Section
        path='/blog'
        color='#66ad03'
        heading='Blog'
        content='This is Blog.'
      />

      <Section
        color='#d6247a'
        heading='Unconditional'
        content='This always renders.'
      />
    </StyledContainer>
  );
}

function withRouteMatching(Component) {
  return class WithRouteMatching extends React.Component {
    state = { path: location.pathname }

    setPath = () => this.setState({ path: location.pathname })

    componentDidMount() {
      addEventListener('popstate', this.setPath);
    }

    render() {
      const pathsMatch = this.props.path === this.state.path;
      const shouldRenderAlways = !this.props.path;

      if (shouldRenderAlways || pathsMatch) {
        return <Component {...this.props} currentPath={this.state.path} />;
      }
      return null;
    }
  };
}

class Link extends React.Component {
  navigate = () => {
    history.pushState(null, null, this.props.to);
  }

  render() {
    return (
      <a href="#" onClick={this.navigate}>
        {this.props.children}
      </a>
    );
  }
}

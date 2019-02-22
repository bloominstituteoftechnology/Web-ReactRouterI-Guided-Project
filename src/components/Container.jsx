import React from 'react';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import SectionPlain from '../screens/Section';


const StyledContainer = styled.div`
  padding: 10px;
  background-color: yellow;
  height: 100%;

  nav {
    display: flex;
    justify-content: space-between;
  }
`;

function withRouteMatching(Component) {
  return class WithRouteMatching extends React.Component {
    state = {
      path: null,
    }

    componentDidMount() {
      this.interval = setInterval(() => {
        this.setState({ path: window.location.pathname });
      }, 100);
    }

    render() {
      const desiredPathMatchesBrowser = this.props.path === this.state.path;

      if (!this.props.path || desiredPathMatchesBrowser) {
        return <Component {...this.props} />;
      }
      return null;
    }
  };
}

class Link extends React.Component {
  navigateTo = to => {
    window.history.pushState(null, null, to);
  }

  render() {
    const { to } = this.props;

    return (
      <a href="#" onClick={() => this.navigateTo(to)}>
        {this.props.children}
      </a>
    );
  }
}

const Meh = withRouteMatching(() => <h1>MEH</h1>);
const Section = withRouteMatching(SectionPlain);

export default function Container() {
  return (
    <StyledContainer>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/blog'>Blog</Link>
        <Link to='/meh'>Meh</Link>
      </nav>

      <Meh path='/meh' />

      <Section
        path='/'
        color='red'
        heading='Home'
        content='This is home.'
      />

      <Section
        path='/about'
        color='pink'
        heading='About'
        content='This is about.'
      />

      <Section
        path='/blog'
        color='blue'
        heading='Blog'
        content='This is Blog.'
      />

      <SectionPlain
        color='magenta'
        heading='Unconditional'
        content='This always renders.'
      />
    </StyledContainer>
  );
}

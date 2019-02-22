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

    componentWillUnmount() {
      clearInterval(this.interval);
    }

    render() {
      const noPathYet = !this.state.path;
      const pathDoesNotMatch = this.state.path !== this.props.path;

      if (noPathYet || pathDoesNotMatch) {
        return null;
      }
      return <Component {...this.props} />;
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

const Section = withRouteMatching(SectionPlain);

export default function Container() {
  return (
    <StyledContainer>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/blog'>Blog</Link>
      </nav>

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

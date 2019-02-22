import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
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

const PlainMeh = () => <h1>MEH</h1>;
const Meh = withRouteMatching(PlainMeh);
const Section = withRouteMatching(SectionPlain);

export default function Container() {
  return (
    <Router>
      <StyledContainer>
        <nav>
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/blog'>Blog</Link>
          <Link to='/meh'>Meh</Link>
        </nav>

        <Route path='/meh' component={PlainMeh} />
        {/* <Meh path='/meh' /> */}

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

        <Section
          color='magenta'
          heading='Unconditional'
          content='This always renders.'
        />
      </StyledContainer>
    </Router>
  );
}

function withRouteMatching(Component) {
  return class WithRouteMatching extends React.Component {
    state = {
      path: null,
    }

    getPath = () => window.location.pathname

    setPath = () => this.setState({ path: this.getPath() })

    componentDidMount() {
      this.setPath();

      window.addEventListener('popstate', () => {
        const pathChanged = this.getPath() !== this.state.path;

        if (pathChanged) {
          this.setPath();
        }
      });
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
  navigate = () => {
    window.history.pushState(null, null, this.props.to);
  }

  render() {
    return (
      <a href="#" onClick={this.navigate}>
        {this.props.children}
      </a>
    );
  }
}

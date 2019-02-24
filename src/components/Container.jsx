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

const PlainMeh = (props) => <h1>MEH: {props.path}</h1>;
const Meh = withRouteMatching(PlainMeh);
const Section = withRouteMatching(SectionPlain);

export default function Container() {
  return (
    // <Router>
    <StyledContainer>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/blog'>Blog</Link>
        <Link to='/meh'>Meh</Link>
      </nav>

      {/* <Route
          exact
          path='/'
          render={() => (
            <SectionPlain
              color='red'
              heading='Home'
              content='This is home.'
            />
          )}
        />

        <Route
          path='/about'
          render={() => (
            <SectionPlain
              color='pink'
              heading='About'
              content='This is about.'
            />
          )}
        />

        <Route
          path='/about'
          render={() => (
            <SectionPlain
              color='pink'
              heading='About'
              content='This is about.'
            />
          )}
        />

        <Route
          path='/meh'
          component={PlainMeh}
        /> */}

      <Meh
        path='/meh'
      />

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
    // </Router>
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
      const renderAlways = !this.props.path;

      if (renderAlways || pathsMatch) {
        return <Component {...this.props} />;
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

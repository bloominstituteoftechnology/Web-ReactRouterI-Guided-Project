import React from 'react';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import BlackjackPlain from '../screens/Blackjack';
import RockPaperScissorsPlain from '../screens/RockPaperScissors';
import TicTacToePlain from '../screens/TicTacToe';
import Section from './Section';


const StyledContainer = styled.div`
  padding: 20px;
  height: 100%;

  nav {
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
  }
`;

const Blackjack = withRouteMatching(BlackjackPlain);
const RockPaperScissors = withRouteMatching(RockPaperScissorsPlain);
const TicTacToe = withRouteMatching(TicTacToePlain);

export default function Container() {
  return (
    <StyledContainer>
      <nav>
        <Link to='/'>Black</Link>
        <Link to='/rock_paper_scissors'>Rock</Link>
        <Link to='/tic_tac_toe'>Tic</Link>
        <Link to='/contact'>Contact</Link>
      </nav>

      <Blackjack path='/' />

      <RockPaperScissors path='/rock_paper_scissors' />

      <TicTacToe path='/tic_tac_toe' />

      <Section
        color='#d6247a'
        heading='Contact'
        content='Contact me always renders.'
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

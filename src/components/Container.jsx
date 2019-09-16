import React from 'react';
import {
  BrowserRouter,
  Route,
  Link,
} from 'react-router-dom'; // we need NAMED exports
import styled from 'styled-components';
import Blackjack from '../screens/Blackjack';
import RockPaperScissors from '../screens/RockPaperScissors';
import TicTacToe from '../screens/TicTacToe';
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

export default function Container(props) {
  return (
    // we wrap in a Router just once per app
    <BrowserRouter>
      <StyledContainer>
        <nav>
          {/* The Link component which is provided to us
          by the react router lib is USING THE History API */}
          <Link to='/blackjack'>Black</Link>
          <Link to='/rock_paper_scissors'>Rock</Link>
          <Link to='/tic_tac_toe'>Tic</Link>
          <Link to='/contact'>Contact</Link>
        </nav>

        <Route path="/blackjack" component={Blackjack} />

        {/* <Blackjack />
        <RockPaperScissors />
        <TicTacToe /> */}

        <Section
          color='#d6247a'
          heading='Contact'
          content='Contact me always renders.'
        />
      </StyledContainer>
    </BrowserRouter>
  );
}

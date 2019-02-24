import React from 'react';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
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

export default function Container() {
  return (
    <StyledContainer>
      <nav>
        <a href='#'>Black</a>
        <a href='#'>Rock</a>
        <a href='#'>Tic</a>
        <a href='#'>Contact</a>
      </nav>

      <Blackjack />

      <RockPaperScissors />

      <TicTacToe />

      <Section
        color='#d6247a'
        heading='Contact'
        content='Contact me always renders.'
      />
    </StyledContainer>
  );
}

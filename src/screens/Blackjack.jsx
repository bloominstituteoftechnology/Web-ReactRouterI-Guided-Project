import React from 'react';
import Section from '../components/Section';


export default function Blackjack(props) {
  // if we use this component with a <Route />
  // it will get magically injected with a bunch
  // of props we did not provide
  return (
    <div>
      <Section
        path={props.location.pathname}
        color='#4286f4'
        heading='Blackjack'
        content='This is my Blackjack game.'
      />

      <button onClick={() => props.history.push('/foo')}>Go to Foo</button>
    </div>
  );
}

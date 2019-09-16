import React from 'react';
import ReactDOM from 'react-dom';
import Container from './components/Container';


// ReactDOM.render(
//   <Container />, document.querySelector('#target'),
// );

ReactDOM.render(
  <a onClick={onLinkClick} href="http://www.google.com">The Link</a>,
  document.querySelector('#target'),
);

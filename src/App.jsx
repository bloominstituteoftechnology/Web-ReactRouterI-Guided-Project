import React from 'react';
import ReactDOM from 'react-dom';
import Container from './components/Container';


ReactDOM.render(
  <Container />, document.querySelector('#target'),
);

// const onLinkClick = evt => {
//   evt.preventDefault();
//   // let's navigate programatically!!!
//   // location.href = 'http://www.wikipedia.org';
//   // location.reload();
//   history.pushState(null, null, 'the-resource');
// };

// const onBackClick = evt => {
//   // using history api,
//   // make this go back to the previous entry
//   // of the history stack
//   evt.preventDefault();
//   // history.back(); // the history API is HTML5 tech
//   history.go(-1);
// };

// ReactDOM.render(
//   <div>
//     <a
//       onClick={onLinkClick}
//       href="http://www.google.com">
//       The Link
//     </a>
//     <br />
//     <a
//       href="#"
//       onClick={onBackClick}>
//       Back button
//     </a>
//   </div>,
//   document.querySelector('#target'),
// );

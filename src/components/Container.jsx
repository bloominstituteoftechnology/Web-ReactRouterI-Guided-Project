import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from '../screens/Home';
import Blog from '../screens/Blog';
import About from '../screens/About';


export default function Container() {
  return (
    <Router>
      <>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/blog" component={Blog} />
      </>
    </Router>
  );
}

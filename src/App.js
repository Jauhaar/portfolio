import React, { useState } from 'react';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';
import Menu from './components/Menu';
import MobileMenu from './components/MobileMenu';
import './App.css';
import { HashRouter, Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <HashRouter basename="/">
      <div className="App">
        <Menu />
        <MobileMenu />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/myprojects" component={Projects} />
          <Route path="/about" component={About} />
          <Route path="/contactme" component={Contact} />
        </Switch>
      </div>
    </HashRouter>
  );
};

export default App;

import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Menu from './Menu'
import Settings from './Settings';
import Home from './Home';

const App = () => {
  return (
    <BrowserRouter>
      <Menu/>
      <Route exact path="/" component={Home} />
      <Route exact path="/settings" component={Settings} />
    </BrowserRouter>
  );
}

export default App;
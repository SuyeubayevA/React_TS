import React from 'react';
import { Navbar } from './components/Navbar';

import {BrowserRouter, Switch, Route} from 'react-router-dom'
import { AboutPage } from './pages/AboutPage';
import { MapsPage } from './pages/MapsPage';
import { MainPage } from './pages/MainPage';

function App() {
  
  return (
    <BrowserRouter>
      <Navbar/>
      <div className="">
        <Switch>
          <Route component={MainPage} path="/" exact/>
          <Route component={AboutPage} path="/about" />
          <Route component={MapsPage} path="/map" />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Wizard from './components/Wizard/Wizard';
import Step1 from './components/Wizard/Step1';

export default (
  <Switch>
    <Route exact path="/" component={Dashboard} />
    <Route path="/wizard" component={Wizard} />
    <Route path="/wizard/step1" component={Step1} />
  </Switch>
)
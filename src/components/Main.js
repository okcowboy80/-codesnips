import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import Home from './Home';

const Main = () => {
  return (
    <Switch> 
      <Route exact path='/' component={Home} />
      <Route path='/about' component={AboutUs} />
      <Route path='/contact' component={ContactUs} />
    </Switch>
  );
}

export default withRouter(Main);
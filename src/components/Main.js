import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import Home from './Home';

const Main = (props) => {
  return (
    <Switch> 
      <Route exact path="/" component={() => <Home author={props.author} />} />
      <Route path='/about' component={AboutUs} />
      <Route path='/contact' component={ContactUs} />
    </Switch>
  );
}

export default withRouter(Main);
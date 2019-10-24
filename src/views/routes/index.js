import React from 'react';
import { Route, Switch } from 'react-router';
import FourOhFour from './404';
import HomePage from '../HomePage';
import Auth from '../auth';
import OrgLanding from '../OrgLanding';
// import U from '../u';
// import U from '../dashboard';
import U from '../user';
import Instructions from '../Instructions';
import Privacy from '../Privacy';
import About from '../About';
import LearnMore from '../LearnMore';
import Resources from '../Resources';
import Results from '../Results';
import Join from '../Join';
// import Login from '../auth/Login';
// import ForgotPassword from '../../components/ForgotPassword';
// import ResetPassword from '../../components/ResetPassword';
// import OrgRoutes from '../../components/OrgRoutes';
// import UserRoutes from '../../components/UserRoutes';
export const Routes = (
  <div>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/auth" component={Auth} />
      <Route path="/u" component={U} />
      <Route path="/instructions" component={Instructions} />
      <Route path="/privacy" component={Privacy} />
      <Route path="/org/:slug" component={OrgLanding} />
      <Route path="/team/:slug" component={OrgLanding} />
      <Route path="/about" component={About}/>
      <Route path="/learn-more" component={LearnMore}/>
      <Route path="/resources" component={Resources}/>
      <Route path="/results" component={Results}/>
      <Route path="/join" component={Join}/>
      <Route path="/:slug" component={OrgLanding} />
      <Route component={FourOhFour} />
    </Switch>
  </div>
);


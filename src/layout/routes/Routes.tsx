import Home from 'modules/home';
import NotFound from 'modules/notFound';
import { Route, Switch } from 'react-router-dom';

const Routes = () => (
  <Switch>
    <Route exact path={'/'} component={Home} />
    <Route component={NotFound} />
  </Switch>
);

export default Routes;

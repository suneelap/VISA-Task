import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import TeamDetails from './components/teamDetails/TeamDetails';
import TeamRoster from './components/teamRoster/TeamRoster';
import TeamMember from './components/teamMember/TeamMember';
class AppRoutes extends Component {
  render() {
    return (
          <Switch>
            <Route exact={true} path="/" component={TeamDetails}/>
            <Route path="/team-roster/:id" component={TeamRoster}/>
            <Route path="/team-member/:rosterId/:id" component={TeamMember}/>
            <Route path="**" component={()=><h1>Page Not Found</h1>}/>
          </Switch>
    );
  }
}

export default AppRoutes;

import React from "react";
import { Switch, Route } from "react-router";
import CatFeed from "../page/catFeedPage/CatFeed";
import CatDetail from "../page/catDetailPage/CatDetail";

const AppRouter = () => (
  <Switch>
    <Route exact path="/" component={CatFeed} />
    <Route path="/detail/:catId" component={CatDetail} />
  </Switch>
);

export default AppRouter;

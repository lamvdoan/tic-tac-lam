import DashboardPage from '../components/DashboardPage';
import NotFoundPage from '../components/NotFoundPage';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const AppRouter = () =>  (
    <BrowserRouter>
        <div>
            <Switch>
                <Route path="/" component={DashboardPage} exact={true} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;
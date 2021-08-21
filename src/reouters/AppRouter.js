import React from 'react'
import { Container } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import { LoginScreen } from '../screens/login/LoginScreen';
import { HomeRouter } from './HomeRouter';

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Container>
                    <Switch>
                        <Route exact path="/login" component={LoginScreen} />
                        <Route path="/" component={HomeRouter} />
                    </Switch>
                </Container>
            </div>
        </Router >
    )
}
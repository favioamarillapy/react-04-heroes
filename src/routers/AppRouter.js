import React, { useContext } from 'react'
import { Container } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Switch
} from "react-router-dom";
import { AuthContext } from '../auth/AuthContext';

import { LoginScreen } from '../screens/login/LoginScreen';
import { HomeRouter } from './HomeRouter';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {

    const { user } = useContext(AuthContext);

    return (
        <Router>
            <div>
                <Container>
                    <Switch>

                        <PublicRoute
                            path="/login"
                            component={LoginScreen}
                            isAuthenticated={user.logged} />

                        <PrivateRoute
                            path="/"
                            component={HomeRouter}
                            isAuthenticated={user.logged} />
                    </Switch>
                </Container>
            </div>
        </Router>
    )
}
import React from 'react'
import { Container } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";

import { MarvelScreen } from '../screens/marvel/MarvelScreen';
import { DcScreen } from '../screens/dc/DcScreen';
import { HeroeScreen } from '../screens/heroe/HeroeScreen';
import { LoginScreen } from '../screens/login/LoginScreen';
import { NavbarUI } from '../components/ui/navbar/NavbarUI';

export const HomeRouter = () => {
    return (
        <div>
            <NavbarUI />
            <Container className="mt-6">
                <Switch>
                    <Route exact path="/marvel" component={MarvelScreen} />
                    <Route exact path="/dc" component={DcScreen} />
                    <Route exact path="/heroe/:id" component={HeroeScreen} />
                    <Route exact path="/login" component={LoginScreen} />

                    <Redirect to="/marvel" />
                </Switch>
            </Container>
        </div>
    )

}

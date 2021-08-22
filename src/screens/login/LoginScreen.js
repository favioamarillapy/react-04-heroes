import React from 'react'
import { Button } from 'react-bootstrap';

export const LoginScreen = ({history}) => {

    const signIn = () => {
        history.replace('/');
    }

    return (
        <div>
            <h1> Login Screen</h1>

            <Button
                variant="primary"
                onClick={signIn}
            >
                Sign In
            </Button>
        </div>
    )
}

import React, { useContext, useEffect } from 'react'
import { Button } from 'react-bootstrap';
import { actions } from '../../actions/actions';
import { AuthContext } from '../../auth/AuthContext';

export const LoginScreen = ({ history }) => {

    const { dispatch } = useContext(AuthContext);

    useEffect(() => {
        localStorage.removeItem('user');
    }, []);

    const signIn = () => {
        dispatch({
            type: actions.login,
            payload: { name: 'Favio' }
        });

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

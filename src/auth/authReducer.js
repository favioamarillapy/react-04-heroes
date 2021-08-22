import { actions } from "../actions/actions";

export const authReducer = (state = {}, action) => {
    switch (action.type) {
        case actions.login:
            return { ...action.payload, logged: true }

        case actions.logout:
            return { logged: false }

        default:
            return state
    }

}
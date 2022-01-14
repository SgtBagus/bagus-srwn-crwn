import { UserActionsTypes } from './user.type';

const userReducer = (state = { currentUser: null }, action) => {
    const { type, payload } = action;
    switch (type) {
        case UserActionsTypes.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: payload
            };
        default:
            return state;
    }
}

export default userReducer;
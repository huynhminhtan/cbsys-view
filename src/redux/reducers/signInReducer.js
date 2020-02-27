import { Actions } from '../actions/types';

const initState = {
    userName: '',
    roomID: '',
}

const signInReducer = (state = initState, action) => {
    switch (action.type) {

        case Actions.INPUT:
            return {
                userName: action.payload.userName,
                roomID: action.payload.roomID
            };
        default:
            return state;
    }
};

export default signInReducer;
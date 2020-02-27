import { Actions } from '../actions/types';


const sentBroadcastReducer = (state = '', action) => {
    switch (action.type) {

        case Actions.SENT_BROAD_CAST_MESSAGE:
            return action.payload;
        default:
            return state;
    }
};

export default sentBroadcastReducer;
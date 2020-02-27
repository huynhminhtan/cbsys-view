import { Actions } from '../actions/types';

const sentUserInfoStatusReducer = (state = [], action) => {
    switch (action.type) {
        // case Actions.CREATE_CONVERSATION:
        //     var ls = { ...state };
        //     ls[action.info.conId] = action.info;
        //     return ls;
        case Actions.SENT_USER_INFO_STATUS:
            return action.payload;
        default:
            return state;
    }
};

export default sentUserInfoStatusReducer;
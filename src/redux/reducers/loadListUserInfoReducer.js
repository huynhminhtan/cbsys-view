import { Actions } from '../actions/types';

const loadListUserInfoReducer = (state = [], action) => {
    switch (action.type) {
        // case Actions.CREATE_CONVERSATION:
        //     var ls = { ...state };
        //     ls[action.info.conId] = action.info;
        //     return ls;
        case Actions.LOAD_USER_INFO_LIST:
            return action.payload;
        default:
            return state;
    }
};

export default loadListUserInfoReducer;
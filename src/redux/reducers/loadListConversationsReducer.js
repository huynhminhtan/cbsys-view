import { Actions } from '../actions/types';

const loadListConversationsReducer = (state = [], action) => {
    switch (action.type) {
        // case Actions.CREATE_CONVERSATION:
        //     var ls = { ...state };
        //     ls[action.info.conId] = action.info;
        //     return ls;
        case Actions.LOAD_CONVERSATION_LIST:
            return action.payload;
        default:
            return state;
    }
};

export default loadListConversationsReducer;
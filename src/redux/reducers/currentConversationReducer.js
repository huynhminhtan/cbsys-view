import { Actions } from '../actions/types';

const initState = { type: '', id: '', name: 'Minh Tan' };

const currentConversationReducer = (state = initState, action) => {
    switch (action.type) {
        case Actions.CHANGE_CURRENT_CONVERSATION:
            return { 
                type: action.payload.type, 
                id: action.payload.id,
                name: action.payload.name    
            };
        default:
            return state;
    }
};

export default currentConversationReducer;
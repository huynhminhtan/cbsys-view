import { Actions } from '../actions/types';

// {
//     content: "Không nó chạy qua chạu lại"
//     time: "32/01/2009"
//     userSend: "Hoài Linh"
// }
const initialUserState = {
    arr:[]
}


const loadMessagesReducer = (state = initialUserState, action) => {
    switch (action.type) {
        // case Actions.CHAT_MESSAGE:
        //     return [ ...state, action.chatObject];
        case Actions.LOAD_MESSAGE:
            return {
                arr : action.payload
            };
        case Actions.ADD_MESSAGE:
            return {
                ...state,
                arr : [...state.arr, action.payload]
            }
        default:
            return state;
    }
};

export default loadMessagesReducer;
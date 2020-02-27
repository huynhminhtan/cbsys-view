import { Actions } from '../actions/types';

// export const createConversation = (info) => ({
//     type: Actions.CREATE_CONVERSATION, info
// });

export const loadListConversationsAction = (listConversation) => ({
    type: Actions.LOAD_CONVERSATION_LIST, 
    payload: listConversation
});
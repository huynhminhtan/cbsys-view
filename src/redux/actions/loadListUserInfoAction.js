import { Actions } from '../actions/types';

// export const createConversation = (info) => ({
//     type: Actions.CREATE_CONVERSATION, info
// });

export const loadListUserInfoAction = (listUserInfo) => ({
    type: Actions.LOAD_USER_INFO_LIST, 
    payload: listUserInfo
});
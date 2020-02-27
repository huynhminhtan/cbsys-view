import { Actions } from './types';

/**
 * @description Load list message of current conversation 
 * @param Array listMessages 
 */
export const loadMessagesAction = (listMessages) => ({
    type: Actions.LOAD_MESSAGE,
    payload: listMessages
});

export const addMessagesAction = (message) => ({
    type: Actions.ADD_MESSAGE,
    payload: message
});
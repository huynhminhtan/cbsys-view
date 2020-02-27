// import { Actions } from '../../constants';
import { Actions } from './types';

export const changeCurrentConversationAction = (currentConverstaion) => ({
    type: Actions.CHANGE_CURRENT_CONVERSATION,
    payload: currentConverstaion
});
import { Actions } from './types';

const sentUserInfoAction = (message) => ({
    type: Actions.SENT_USER_INFO_MESSAGE,
    payload: message
});

export {
    sentUserInfoAction
}
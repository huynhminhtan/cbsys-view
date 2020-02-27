import { Actions } from './types';

const sentUserInfoStatusAction = (status) => ({
    type: Actions.SENT_USER_INFO_STATUS,
    payload: status
});

export {
    sentUserInfoStatusAction
}
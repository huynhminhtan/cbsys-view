import { Actions } from './types';

const sentBroadcastAction = (message) => ({
    type: Actions.SENT_BROAD_CAST_MESSAGE,
    payload: message
});

export {
    sentBroadcastAction
}
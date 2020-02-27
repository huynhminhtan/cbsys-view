// import { Actions } from '../../constants';
import { Actions } from './types';

export const inputUserAndRoomAction = (userAndRoom) => ({
    type: Actions.INPUT,
    payload: userAndRoom
});
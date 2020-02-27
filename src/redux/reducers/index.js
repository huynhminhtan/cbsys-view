import { combineReducers } from 'redux';
// import sign from './signReducer';
// import channel from './channelReducer';
// import conversation from './conversationReducer';
// import currentChat from './currentChatReducer';
// import message from './messageReducer';
// import page from './pageReducer';
// import currentConversationReducer from './currentConversationReducer'
// import loadMessagesReducer from './loadMessagesReducer'
// import loadListConversationsReducer from './loadListConversationsReducer'
// import signInReducer from './signInReducer'
import sentBroadcastReducer from './sentBroadcastReducer'
import loadListUserInfoReducer from './loadListUserInfoReducer'
import sentUserInfoStatusReducer from './sentUserInfoStatusReducer'



export default combineReducers({
    // page, sign, channel, conversation, currentChat, message
    // currentConversationReducer,
    // loadMessagesReducer,
    // loadListConversationsReducer,
    // signInReducer,
    sentBroadcastReducer,
    // sentUserInfoStatusReducer,
    loadListUserInfoReducer
});
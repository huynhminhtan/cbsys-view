import React, { Component } from 'react';
import { Layout, Button, Avatar, notification } from 'antd';
import { connect } from 'react-redux';
// import '../../styles/style.css';

// import { loadListConversationsAction } from '../../redux/actions/loadListConversationsAction'

import { dataTest } from '../../DataTest';
const { Header } = Layout;

class ChatHeader extends Component {

    handleLogOut = (e) => {
        // this.props.logOut();
        // notification.open({
        //     message: 'Logout successfully',
        //     description: 'Please login again'
        // });
        // this.props.sign.connection.close();
        // this.props.disconnectSocket();
        // this.props.pageLogin();
        // this.props.loadMessage([]);
        // this.props.loadConversationList({});
        // this.props.loadChannelList({});
        // this.props.changeCurrentChat({type: '', id: '', name: ''});
        // localStorage.removeItem('user');
        // localStorage.removeItem('token');
    }

    render() {
        // const { currentChat, sign } = this.props;
        const { currentChat, sign } = dataTest.chatHeader;

        const { currentConversation, userAndRoom } = this.props;

        console.log("currentConversation", currentConversation);

        return (
            <Header style={{ background: '#fff', padding: 0 }}>
                <div className='chat-header'>
                    <div className='chat-header-left'>
                        <Avatar size='large' style={{ backgroundColor: '#87d068' }} icon={currentChat.type === 'channel' ? 'profile' : 'user'} />
                        <span className='user-name'>{
                          
                                currentConversation.id.length > 0
                                ? currentConversation.id
                                : 'No conversation'
                        }</span>
                    </div>
                    <div className='chat-header-right'>
                        <div className='current-user-name'>
                            <span className='user-name'>{userAndRoom.userName}</span>
                            <span className='subtitle'> (Logged in) </span>
                        </div>
                        <Button icon='logout' type='primary' shape='circle' onClick={this.handleLogOut} />
                    </div>
                </div>
            </Header>
        );
    }
}


const mapStateToProps = state => ({
    // sign: state.sign,
    // currentChat: state.currentChat
    currentConversation: state.currentConversationReducer,
  userAndRoom: state.signInReducer,

})

const mapDispatchToProps = (dispatch) => ({
    // pageLogin: () => dispatch(pageLogin()),
    // logOut: () => dispatch(logOut()),
    // disconnectSocket: () => dispatch(disconnectSocket()),
    // loadListConversations: (listConversation) => dispatch(
    //     loadListConversationsAction(listConversation)
    // ),
    // loadChannelList: (listChannel) => dispatch(loadChannelList(listChannel)),
    // loadMessage: (listChatObj) => dispatch(loadMessage(listChatObj)),
    // changeCurrentChat: (currChatObj) => dispatch(changeCurrentChat(currChatObj))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ChatHeader);
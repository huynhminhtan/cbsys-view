import React, { Component } from 'react';
import '../styles/style.css';
import { connect } from 'react-redux';
import { Layout } from 'antd';
import Sidebar from './sidebar/Sidebar'
import ChatHeader from "./chatbox/ChatHeader";
import ChatBody from './chatbox/ChatBody';
import ChatFooter from './chatbox/ChatFooter';
import { loadListConversations } from '../services/conversationsService'
import { addMessagesAction } from '../redux/actions/loadMessagesAction'
// import handleWebsocket from '../services/HandleWebsocket'
import Websocket from '../websocket';

class Chat extends Component {

    constructor(props) {
        super(props);
        this.state = {
            // ws: new WebSocket("ws://localhost:6898/websocket"),
            attempts: 1
        };
    }

    handleWebsocket = (websocket) => {


    }

    componentDidMount() {

        this.props.loadListConversations();
    }

    handleOnMessage(data) {
        console.log("data nhạn",data);
        // console.log("dfsaf");
        // messageOther:username:mesageContent

        const { currentConversation } = this.props;

        console.log("currentConversation XXXXX", currentConversation);
        
        
        const array = data.split(":");

        // only save message only  type's message is messageOther and
        // conversation's message bằng với current conversation 

        if (array[0] == "messageOther" &&  array[2] == currentConversation.id)
        {
            console.log("server sent", array);

            const userName = array[1];
            const contentMessage = array[3];
    
            const today = new Date();
    
            // save to store redux
            this.props.addMessage({
                content: contentMessage,
                time: today,
                userSend: userName
            })
        }

       
    }

    handleOpen() {
        // alert("connected:)");
        const { currentConversation, userAndRoom } = this.props;

        this.refWebSocket.sendMessage('register:' + userAndRoom.userName + ':' + userAndRoom.roomID);
        // this.refWebSocket.sendMessage('register:' + userAndRoom.userName + ':' + currentConversation.id);

        let data = {
            "messageType": "createConversation",
            "content": {
                "conversationName": "Class 12A",
                "users": [
                    "09888777162",
                    "09877762612",
                    "09222111123"
                ]
            }
        }

        this.refWebSocket.sendMessage(JSON.stringify(data));

        console.log("socket connect");
    }

    sendMessage = (message) => {
        this.refWebSocket.sendMessage(message);
    }

    render() {

        return (

            <Layout className='chat-container'>
                {/* <button onClick={() => this.sendMessage("register:sdsds:SDSd")} >Send Message</button> */}
                <Websocket url='ws://localhost:6898/websocket'
                    onMessage={this.handleOnMessage.bind(this)}
                    onOpen={this.handleOpen.bind(this)}
                    reconnect={true} debug={true}
                    ref={Websocket => {
                        this.refWebSocket = Websocket;
                    }}
                />

                <Sidebar sendMessage={this.sendMessage} />
                <Layout style={{ height: '100vh' }}>
                    <ChatHeader />
                    <ChatBody  />
                    <ChatFooter sendMessage={this.sendMessage} />
                </Layout>
            </Layout>
        );
    }

}



const mapStateToProps = state => ({
    // sign: state.sign,
    // currentChat: state.currentChat
    currentConversation: state.currentConversationReducer,
    userAndRoom: state.signInReducer,

});

const mapDispatchToProps = (dispatch) => ({
    loadListConversations: () => dispatch(loadListConversations()),
    addMessage: (message) => dispatch(addMessagesAction(message)),
});
// loadConversationList: (listConversation) => dispatch(loadConversationList(listConversation)),
// loadChannelList: (listChannel) => dispatch(loadChannelList(listChannel)),
// connectSocket: (connection) => dispatch(connectSocket(connection)),
// chatMessage: (chatObj) => dispatch(chatMessage(chatObj)),
// createConversation: (info) => dispatch(createConversation(info)),
// createChannel: (info) => dispatch(createChannel(info))

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Chat);

// export default Chat;
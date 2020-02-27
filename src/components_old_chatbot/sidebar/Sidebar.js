import React, { Component } from 'react';
import '../../styles/style.css';
import { connect } from 'react-redux';
import { Layout, Menu } from 'antd';
// import UserItemContainer from '../containers/UserItemContainer';
// import NewConversationContainer from '../containers/NewConversationContainer';
import ConversationItem from './ConversationItem';


import { dataTest } from '../../DataTest';
const { Sider } = Layout;


class Sidebar extends Component {

    componentDidMount() {
        const { listConversations } = this.props;

        // console.log('listD', listConversations);
    }

    render() {
        // const { channel, conversation } = this.props;
        // var arrChannel = [], arrConversation = [];
        // for (var i in channel) {
        //     if (channel.hasOwnProperty(i)) {
        //         arrChannel.push(channel[i]);
        //     }
        // }
        // for (var j in conversation) {
        //     if (conversation.hasOwnProperty(j)) {
        //         arrConversation.push(conversation[j]);
        //     }
        // }

        // test
        // const listConversations = dataTest.listconversations;

        const { listConversations } = this.props;

        // console.log('list', listConversations);

        return (
            <Sider className='chat-slider'
                breakpoint="md"
                collapsedWidth="0"
                onCollapse={(collapsed, type) => { console.log(collapsed, type); }}>

                <div className='chat-slider-top'>
                    {/* <NewConversationContainer></NewConversationContainer> */}
                </div>

                <Menu theme="light" mode="inline">

                    {/* { listConversations.map( ({channel, latestMsgId, currMsgId}) => 
                    <ConversationItem key={channel} name={channel} group={true} 
                        id={channel} numNewMsg={latestMsgId - currMsgId} />
                )} */}

                    {listConversations.map(({ conversationName }) =>
                        <ConversationItem sendMessage={this.props.sendMessage}
                            key={conversationName}
                            name={conversationName}
                            group={true}
                            id={conversationName}
                            numNewMsg={2 - 1} />
                    )}

                    {/* <ConversationItem key={channel} name={channel} group={true} id={channel} numNewMsg={latestMsgId - currMsgId} />
                <ConversationItem key={channel} name={channel} group={true} id={channel} numNewMsg={latestMsgId - currMsgId} /> */}

                    {/* { arrChannel.map( ({channel, latestMsgId, currMsgId}) => 
                    <UserItemContainer key={channel} name={channel} group={true} id={channel} numNewMsg={latestMsgId - currMsgId} />
                )}
                { arrConversation.map( ({conId, user, latestMsgId, currMsgId}) => 
                    <UserItemContainer key={conId} name={user} group={false} id={conId} numNewMsg={latestMsgId - currMsgId} />
                )} */}

                </Menu>
            </Sider>
        );
    }
}


const mapStateToProps = state => ({
    // sign: state.sign,
    // channel: state.channel,
    listConversations: state.loadListConversationsReducer
});

const mapDispatchToProps = (dispatch) => ({
    // changeCurrentChat: (currChatObj) => dispatch(changeCurrentChat(currChatObj)),
    // loadMessage: (listChatObj) => dispatch(loadMessage(listChatObj))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Sidebar);

// export default Sidebar;
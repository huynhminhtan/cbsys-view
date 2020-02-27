
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Layout, Menu, Icon } from 'antd';
import 'antd/dist/antd.css';
const { Header, Sider, Content } = Layout;


class HeaderLayout extends Component {

    componentDidMount() {

    }

    render() {
        return (
            <Header style={{ background: '#fff', padding: 0 }}>
                <Icon
                    className="trigger"
                    type={this.props.collapsed ? 'menu-unfold' : 'menu-fold'}
                    onClick={this.props.onClick}
                />
            </Header>
        );
    }
}


const mapStateToProps = state => ({
    // sign: state.sign,
    // channel: state.channel,
    // listConversations: state.loadListConversationsReducer
});

const mapDispatchToProps = (dispatch) => ({
    // changeCurrentChat: (currChatObj) => dispatch(changeCurrentChat(currChatObj)),
    // loadMessage: (listChatObj) => dispatch(loadMessage(listChatObj))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HeaderLayout);
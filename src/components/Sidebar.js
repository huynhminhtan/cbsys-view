import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
} from "react-router-dom";

// import '../../styles/style.css';
import { connect } from 'react-redux';
import { Layout, Menu, Icon } from 'antd';
import 'antd/dist/antd.css';
// import './../index.css';
const { Header, Sider, Content } = Layout;

// import UserItemContainer from '../containers/UserItemContainer';
// import NewConversationContainer from '../containers/NewConversationContainer';
// import ConversationItem from './ConversationItem';

// import { dataTest } from '../../DataTest';
// const { Sider } = Layout;


class Sidebar extends Component {

    componentDidMount() {

    }

    render() {
        return (
                <Sider
                    collapsedWidth="0" trigger={null} collapsible collapsed={this.props.collapsed}>
                    <div className="logo logo-admin" >CBSYS VIEW</div>
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1">
                            <Icon type="user" />
                            <Link to="/users" style={{ display: 'inline-block' }}>
                                <span>Users</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Icon type="video-camera" />
                            <Link to="/services" style={{ display: 'inline-block' }}>
                                <span>Services</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <Icon type="upload" />
                            <span>Others</span>
                        </Menu.Item>
                        <Menu.Item key="4">
                            <Icon type="video-camera" />
                            <Link to="/booking" style={{ display: 'inline-block' }}>
                                <span>Booking</span>
                            </Link>
                        </Menu.Item>
                    </Menu>
                </Sider>
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
)(Sidebar);

// export default Sidebar;
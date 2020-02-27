import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    Redirect
} from "react-router-dom";

// import './App.css';
// import { Actions } from './constants';
// import Chat from "./components/Chat";
// import SocketContext from './socket-context';
// import io from 'socket.io-client';
import {connect} from 'react-redux';
import Sidebar from './components/Sidebar'
import UserPage from './pages/UserPage'
import ServicePage from './pages/ServicePage'
import HeaderLayout from './components/HeaderLayout'

// import { Layout } from 'antd';
import {Layout, Menu, Icon} from 'antd';
import 'antd/dist/antd.css';
import './index.css';
import BookingView from "./pages/BookingView";
import IndexPage from "./pages/IndexPage";
// import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'

const {Header, Sider, Content} = Layout;

// import { Modal, Input } from 'antd';
// import { inputUserAndRoomAction } from './redux/actions/inputUserAndRoomAction'
// import {
//   changeCurrentConversationAction
// } from './redux/actions/currentConversationAction'


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            visible: true,
            userName: '',
            roomID: '',
            isChat: false
        }
    }

    state = {
        collapsed: false,
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    componentDidMount() {
        // const userName = "mtSiniChi";
        // const roomID = "R001";

        // this.props.inputUserAndRoom({
        //   userName,
        //   roomID,
        // });
    }

    // handleOk = (e) => {
    //   this.setState({
    //     visible: false,
    //     isChat: true
    //   });


    // }

    // handleCancel = (e) => {
    //   this.setState({
    //     visible: false,
    //   });

    // }

    // inputUserName = (e) => {
    //   // console.log(e.target.value);
    //   this.setState({
    //     // ...this.state,
    //     userName: e.target.value
    //   })

    //   const userName = e.target.value;
    //   // const userName = this.state.userName;
    //   const roomID = this.state.roomID;


    //   this.props.inputUserAndRoom({
    //     userName,
    //     roomID,
    //   });

    //   var type = this.props.group ? 'channel' : 'user';

    //   this.props.changeCurrentConversation({
    //     type: type,
    //     id: roomID,
    //     name: roomID
    //   });


    // }

    // inputRoom = (e) => {
    //   // console.log(e.target.value);
    //   this.setState({
    //     // ...this.state,
    //     roomID: e.target.value
    //   })

    //   const userName = this.state.userName;
    //   // const roomID = this.state.roomID;


    //   // const userName = this.state.userName;
    //   const roomID = e.target.value;


    //   // console.log("romm",roomID);
    //   // console.log("romm",e.target.value);

    //   this.props.inputUserAndRoom({
    //     userName,
    //     roomID,
    //   });

    //   var type = this.props.group ? 'channel' : 'user';

    //   this.props.changeCurrentConversation({
    //     type: type,
    //     id: roomID,
    //     name: roomID
    //   });

    // }

    render() {

        // // // const { page } = this.props;
        // const page = 'PAGE_CHAT';


        return (

            <Router>
                <Route exact path="/">
                    {<Redirect to="/index"/>}
                </Route>

                <Switch>
                    <Route path="/index" children={<IndexPage/>}/>
                    <Route path="/booking" children={<BookingView/>}/>
                </Switch>
                {/*<div>*/}
                {/*    <Layout>*/}
                {/*      <Sidebar collapsed={this.state.collapsed} />*/}
                {/*      <Layout >*/}
                {/*        <HeaderLayout collapsed={this.state.collapsed} onClick={this.toggle} />*/}
                {/*        */}
                {/*        <Content className='content-wrapper'>*/}

                {/*            <Switch>*/}
                {/*              <Route exact path="/">*/}
                {/*                {<Redirect to="/users" />}*/}
                {/*              </Route>*/}
                {/*              <Route path="/users" children={<UserPage />} />*/}
                {/*              <Route path="/services" children={<ServicePage />} />*/}
                {/*            </Switch>*/}

                {/*        </Content>*/}
                {/*      </Layout>*/}
                {/*    </Layout>*/}
                {/*</div>*/}


            </Router>

        )

        // if (!this.state.isChat) {
        //   return (

        //     <div>

        //       <Modal
        //         title="Entry Chat"
        //         visible={this.state.visible}
        //         onOk={this.handleOk}
        //         onCancel={this.handleCancel}
        //       >

        //         <p>User Name:</p>
        //         <Input placeholder="" onChange={this.inputUserName} />

        //         <p style={{ padding: '5px' }}></p>

        //         <p>Room:</p>
        //         <Input placeholder="" onChange={this.inputRoom} />

        //       </Modal>

        //     </div>

        //   );
        // }
        // else {
        //   switch (page) {
        //     // case Actions.PAGE_SIGNUP:
        //     // return <SignUpContainer />;
        //     case 'PAGE_CHAT':
        //       return <Chat />;
        //     default:
        //       return <Chat />;
        //   }

        // }


    }


}

const mapStateToProps = state => ({
    // sign: state.sign,
    // currentChat: state.currentChat
    // userAndRoom: state.signInReducer,
});

const mapDispatchToProps = (dispatch) => ({
    // // loadListConversations: () => dispatch(loadListConversations())
    // inputUserAndRoom: (nameAndRoom) => dispatch(inputUserAndRoomAction(nameAndRoom)),
    // changeCurrentConversation: (currConversationObj) => dispatch(
    //   changeCurrentConversationAction(currConversationObj)
    // )
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);



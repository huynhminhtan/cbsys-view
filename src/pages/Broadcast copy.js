// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// // import { Layout } from 'antd';
// import { Layout, Menu, Icon } from 'antd';
// import 'antd/dist/antd.css';
// import { Input, Form, Button, notification, Table } from 'antd';
// import { Row, Col } from 'antd';

// import { sentBroadcastService } from './../services/sentBroadcastService'


// const { Header, Sider, Content } = Layout;


// class HorizontalLoginForm extends Component {

//     constructor(props) {
//         super(props);
//         // this.state = {
//         //     visible: true,
//         //     userName: '',
//         //     roomID: '',
//         //     isChat: false
//         // }

//         this.state = {
//             title: "",
//             userIDs: [],
//             imgURL: "",
//             subtitle: "",
//             urlPromo: ""
//         }
//     }

//     // state = {
//     //     collapsed: false,
//     // };

//     // toggle = () => {
//     //     this.setState({
//     //         collapsed: !this.state.collapsed,
//     //     });
//     // };

//     componentDidMount() {

//         // this.props.form.setFieldsValue({
//         //     "title": "Mua 1 tặng 2 nha nhamx",
//         //     "userIDs": ["2095752627127344"],
//         //     "imgURL": "https://www.johornow.com/wp-content/uploads/sites/2/2017/12/1-min-14.jpg",
//         //     "subtitle": "Chương trình khuyến mãi dành cho thành viên VIP.",
//         //     "urlPromo": "https://google.com"
//         // })

//     }

//     componentWillReceiveProps(nextProps) {
//         if (nextProps.message !== '' && this.props.message !== nextProps.message) {
//             this.openNotification(nextProps.message)
//         }
//     }

//     openNotification = (message) => {
//         notification.open({
//             message: message,
//             //   description:
//             // 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
//             icon: <Icon type="smile" style={{ color: '#108ee9' }} />,
//         });
//     };


//     setTest = () => {
//         this.props.form.setFieldsValue({
//             "title": "Mua 1 tặng 2 nha nhamx",
//             "userIDs": "2095752627127344",
//             "imgURL": "https://www.johornow.com/wp-content/uploads/sites/2/2017/12/1-min-14.jpg",
//             "subtitle": "Chương trình khuyến mãi dành cho thành viên VIP.",
//             "urlPromo": "https://google.com"
//         })
//     }

//     handleSubmit = e => {
//         e.preventDefault();
//         this.props.form.validateFields((err, values) => {
//             if (!err) {
//                 console.log('Received values of form: ', values);

//                 this.props.sentBroadcastService({
//                     title: values.title,
//                     userIDs: values.userIDs.split(','),
//                     imgURL: values.imgURL,
//                     subtitle: values.subtitle,
//                     urlPromo: values.urlPromo
//                 });

//             }
//         });

//     };

//     render() {

//         const { getFieldDecorator } = this.props.form;

//         return (
//             <div>
//                 <Row>
//                     <h2>Sent messages to list users in parallel (broadcast messages)</h2>
//                 </Row>

//                 <Row className="content-body">
//                     <Col span={12}>
//                         <div>
//                             <Form layout="vertical" onSubmit={this.handleSubmit} >
//                                 <Form.Item className="form-item" label="Title:" >
//                                     {getFieldDecorator('title', {
//                                         rules: [{ required: true, message: 'Please input your title!' }],
//                                     })(
//                                         <Input placeholder="" />,
//                                     )}
//                                 </Form.Item>

//                                 <Form.Item className="form-item" label="User IDs:" >
//                                     {getFieldDecorator('userIDs', {
//                                         rules: [{ required: true, message: 'Please input list users!' }],
//                                     })(
//                                         <Input placeholder="" />,
//                                     )}
//                                 </Form.Item>

//                                 <Form.Item className="form-item" label="Image URL:" >
//                                     {getFieldDecorator('imgURL', {
//                                         rules: [{ required: true, message: 'Please input your image url!' }],
//                                     })(
//                                         <Input placeholder="" />,
//                                     )}
//                                 </Form.Item>

//                                 <Form.Item className="form-item" label="Subtitle:" >
//                                     {getFieldDecorator('subtitle', {
//                                         rules: [{ required: true, message: 'Please input your subtile!' }],
//                                     })(
//                                         <Input placeholder="" />,
//                                     )}
//                                 </Form.Item>

//                                 <Form.Item label="Link promo:" >
//                                     {getFieldDecorator('urlPromo', {
//                                         rules: [{ required: true, message: 'Please input your link promotion!' }],
//                                     })(
//                                         <Input placeholder="" />,
//                                     )}
//                                 </Form.Item>

//                                 <Form.Item >
//                                     <Button type="primary" htmlType="submit">
//                                         Sent
//                                     </Button>

//                                     <Button className="btnTest" onClick={this.setTest}>
//                                         Data test
//                                     </Button>
//                                 </Form.Item>
//                             </Form>


//                         </div>
//                     </Col>
//                     <Col span={10} offset={2}>

//                         {/* <Button onClick={() => {

//                             this.updateF()
//                         }}>Xlixk</Button> */}

//                         <span>Users:</span>

//                         <Table rowSelection={this.rowSelection} columns={columns} dataSource={data} />

//                     </Col>
//                 </Row>


//             </div>
//         )

//     }

//     updateIDs = (ids) => {
//         this.props.form.setFieldsValue({
//             "userIDs": ids
//         })
//     }


//     // rowSelection object indicates the need for row selection
//     rowSelection = {
//         onChange: (selectedRowKeys, selectedRows) => {
//             console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);

//             let str = "";
//             selectedRows.forEach(row => {

//                 str += row.id + ", ";
//             });

//             let strr = str.substring(0, str.length - 2);

//             this.updateIDs(strr);
//             console.log(strr);

//         },
//         getCheckboxProps: record => ({
//             disabled: record.name === 'Disabled User', // Column configuration not to be checked
//             name: record.name,
//         }),
//     };
// }



// const columns = [
//     {
//         title: 'ID',
//         dataIndex: 'id',
//         // render: text => <a href="javascript:;">{text}</a>,
//     },
//     {
//         title: 'Name',
//         dataIndex: 'name',
//     },

// ];
// const data = [
//     {
//         key: '1',
//         id: '2095752627127344',
//         name: "Huỳnh Minh Tân"
//     },
//     {
//         key: '2',
//         id: '2277994702313304',
//         name: 'Nguyễn Diệu Nhi',
//     },
//     {
//         key: '3',
//         id: '20957526271112323',
//         name: 'Lê Thanh Quang',
//     },
//     {
//         key: '4',
//         name: 'Trần Tiểu Như',
//         id: '20957526271111245',
//     },
//     {
//         key: '5',
//         name: 'Phương Lê Nhi',
//         id: '20957526271111245',
//     },
// ];

// const mapStateToProps = state => ({
//     // sign: state.sign,
//     // currentChat: state.currentChat
//     // userAndRoom: state.signInReducer,a
//     message: state.sentBroadcastReducer
// });

// const mapDispatchToProps = (dispatch) => ({
//     // // loadListConversations: () => dispatch(loadListConversations())
//     // inputUserAndRoom: (nameAndRoom) => dispatch(inputUserAndRoomAction(nameAndRoom)),
//     // changeCurrentConversation: (currConversationObj) => dispatch(
//     //   changeCurrentConversationAction(currConversationObj)
//     // )

//     // sentBroadCast: (dataPromo) => sentBroadcastAction(dataPromo)

//     sentBroadcastService: (dataPromo) => dispatch(sentBroadcastService(dataPromo))
// });

// const Broadcast = Form.create({ name: 'horizontal_login' })(HorizontalLoginForm);


// export default connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(Broadcast);

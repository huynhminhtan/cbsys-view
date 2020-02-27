import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Layout } from 'antd';
import { Layout, Menu, Icon } from 'antd';
import 'antd/dist/antd.css';
import { Input, Form, Button, notification, Table } from 'antd';
import { Row, Col } from 'antd';

import { sentBroadcastService } from './../services/sentBroadcastService'
import { sentUserInfoService } from './../services/sentUserInfoService'
import { loadUserInfoService } from './../services/loadUserInfoService'

const { Header, Sider, Content } = Layout;


class HorizontalLoginForm extends Component {

    constructor(props) {
        super(props);
        // this.state = {
        //     visible: true,
        //     userName: '',
        //     roomID: '',
        //     isChat: false
        // }

        this.state = {
            title: "",
            userIDs: [],
            imgURL: "",
            subtitle: "",
            urlPromo: ""
        }
    }

    // state = {
    //     collapsed: false,
    // };

    // toggle = () => {
    //     this.setState({
    //         collapsed: !this.state.collapsed,
    //     });
    // };

    componentDidMount() {

        // this.props.form.setFieldsValue({
        //     "title": "Mua 1 tặng 2 nha nhamx",
        //     "userIDs": ["2095752627127344"],
        //     "imgURL": "https://www.johornow.com/wp-content/uploads/sites/2/2017/12/1-min-14.jpg",
        //     "subtitle": "Chương trình khuyến mãi dành cho thành viên VIP.",
        //     "urlPromo": "https://google.com"
        // })

        // load list user info
        this.props.loadListUserInfo();
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.message !== '' && this.props.message !== nextProps.message) {
            this.openNotification(nextProps.message)
        }

        // if (
        //     (nextProps.statusSentUserInfo === false || nextProps.statusSentUserInfo === true)){

        //     console.log("Status sent messsage: " + nextProps.statusSentUserInfo);
        //     if(nextProps.statusSentUserInfo === true){
        //         this.props.loadListUserInfo();
        //         this.openNotification("Thêm thành công.");
        //     } else {
        //         this.openNotification("Thêm bị lỗi, vui lòng thử lại sau.");
        //     }
        // }

    }

    openNotification = (message) => {
        notification.open({
            message: message,
            //   description:
            // 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
            icon: <Icon type="smile" style={{ color: '#108ee9' }} />,
            duration: 1.5
        });
    };


    setTest = () => {
        this.props.form.setFieldsValue({
            "name": "Tiểu Linh Trúc",
            "mail": "tieulinhtruc98@gmail.com",
            "contact": "24/3 đường Bình Phương, Quận 2",
            "phone": "0987111231",
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Form input', values);

                this.props.sentUserInfo({
                    name: values.name,
                    // mail: values.userIDs.split(','),
                    mail: values.mail,
                    contact: values.contact,
                    phone: values.phone
                }).then(status => {
                    console.log("Status sent messsage: " + status);
                    if(status === true){
                        this.props.loadListUserInfo();
                        this.openNotification("Thêm thành công.");
                    } else {
                        this.openNotification("Thêm bị lỗi, vui lòng thử lại sau.");
                    }
                });

            }
        });

    };

    render() {

        const { getFieldDecorator } = this.props.form;

        return (
            <div>
                <Row>
                    {/* <Col span={8}>
                        <h2>TẠO MỚI THÔNG TIN KHÁCH HÀNG</h2>
                    </Col> */}
                    {/* <Col span={14} offset={1}>
                        <h2>DANH SÁCH KHÁCH HÀNG</h2>
                    </Col> */}
                </Row>

                <Row className="content-body">
                    <Col span={22} offset={1}>
                        <h2>TẠO MỚI THÔNG TIN KHÁCH HÀNG</h2>

                        <div>
                            <Form layout="vertical" onSubmit={this.handleSubmit} >

                                <Form.Item className="form-item" label="Họ và tên" >
                                    {getFieldDecorator('name', {
                                        rules: [{ required: true, message: 'Vui lòng nhập họ và tên.' }],
                                    })(
                                        <Input placeholder="" />,
                                    )}
                                </Form.Item>

                                <Form.Item className="form-item" label="Số điện thoại" >
                                    {getFieldDecorator('phone', {
                                        rules: [{ required: true, message: 'Vui lòng nhập số điện thoại.' }],
                                    })(
                                        <Input placeholder="" />,
                                    )}
                                </Form.Item>

                                <Form.Item className="form-item" label="Địa chỉ" >
                                    {getFieldDecorator('contact', {
                                        rules: [{ required: true, message: 'Vui lòng nhập địa chỉ.' }],
                                    })(
                                        <Input placeholder="" />,
                                    )}
                                </Form.Item>

                                <Form.Item className="form-item" label="Địa chỉ mail" >
                                    {getFieldDecorator('mail')(
                                        <Input placeholder="" />,
                                    )}
                                </Form.Item>

                                <Form.Item>
                                    <br></br>
                                    <Button type="primary" htmlType="submit">
                                        Sent
                                    </Button>

                                    <Button className="btnTest" onClick={this.setTest}>
                                        Data test
                                    </Button>
                                </Form.Item>


                            </Form>

                        </div>
                    </Col>

                    {/* /// content left */}

                    <Col span={14} offset={1}>

                        {/* <Button onClick={() => {

                            this.updateF()
                        }}>Xlixk</Button> */}
                        <br/>
                        {/* <Table rowSelection={this.rowSelection} columns={columns} dataSource={this.props.listUserInfo} /> */}

                    </Col>
                </Row>

                <Row>
                    <hr></hr>
                    <br/><br/>
                </Row>

                <Row>
                    <Col span={22} offset={1}>
                        <h2>DANH SÁCH KHÁCH HÀNG</h2>
                        <Table rowSelection={this.rowSelection} columns={columns} dataSource={this.props.listUserInfo} />
                    </Col>
                </Row>

            </div>
        )

    }

    updateIDs = (ids) => {
        this.props.form.setFieldsValue({
            "userIDs": ids
        })
    }


    // rowSelection object indicates the need for row selection
    rowSelection = {
        onChange: (selectedRowKeys, selectedRows) => {
            console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);

            let str = "";
            selectedRows.forEach(row => {

                str += row.id + ", ";
            });

            let strr = str.substring(0, str.length - 2);

            this.updateIDs(strr);
            console.log(strr);

        },
        getCheckboxProps: record => ({
            disabled: record.name === 'Disabled User', // Column configuration not to be checked
            name: record.name,
        }),
    };
}



const columns = [
    {
        title: 'ID',
        dataIndex: 'id',
        // render: text => <a href="javascript:;">{text}</a>,
    },
    {
        title: 'Họ tên',
        dataIndex: 'name',
    },
    {
        title: 'Số điện thoại',
        dataIndex: 'phone',
    },
    {
        title: 'Địa chỉ',
        dataIndex: 'contact',
    },
    {
        title: 'Email',
        dataIndex: 'email',
    }
];
const data = [
    {
        key: '1',
        id: '2095752627127344',
        name: "Huỳnh Minh Tân"
    },
    {
        key: '2',
        id: '2277994702313304',
        name: 'Nguyễn Diệu Nhi',
    },
    {
        key: '3',
        id: '20957526271112323',
        name: 'Lê Thanh Quang',
    },
    {
        key: '4',
        name: 'Trần Tiểu Như',
        id: '20957526271111245',
    },
    {
        key: '5',
        name: 'Phương Lê Nhi',
        id: '20957526271111245',
    },
];

const mapStateToProps = state => ({
    // sign: state.sign,
    // currentChat: state.currentChat
    // userAndRoom: state.signInReducer,
    message: state.sentBroadcastReducer,
    listUserInfo: state.loadListUserInfoReducer,
    // statusSentUserInfo: state.sentUserInfoStatusReducer
});

const mapDispatchToProps = (dispatch) => ({
    // // loadListConversations: () => dispatch(loadListConversations())
    // inputUserAndRoom: (nameAndRoom) => dispatch(inputUserAndRoomAction(nameAndRoom)),
    // changeCurrentConversation: (currConversationObj) => dispatch(
    //   changeCurrentConversationAction(currConversationObj)
    // )

    // sentBroadCast: (dataPromo) => sentBroadcastAction(dataPromo)

    loadListUserInfo: () => dispatch(loadUserInfoService()),
    sentUserInfo: (userInfo) => dispatch(sentUserInfoService(userInfo))
});

const UserPage = Form.create({ name: 'horizontal_login' })(HorizontalLoginForm);


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserPage);

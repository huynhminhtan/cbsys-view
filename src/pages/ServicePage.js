import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Layout } from 'antd';
import { Layout, Menu, Icon } from 'antd';
import 'antd/dist/antd.css';
import { Input, Form, Button, notification, Table, AutoComplete, Select } from 'antd';
import { Row, Col } from 'antd';

import { sentBroadcastService } from './../services/sentBroadcastService'
import { sentUserInfoService } from './../services/sentUserInfoService'
import { sentServiceInfoService, loadServiceInfo } from  './../services/sentServiceInfoService'
import { loadUserInfoService, searchUserInfo } from './../services/loadUserInfoService'

const { Header, Sider, Content } = Layout;
const { TextArea } = Input;
const { Option } = AutoComplete;

class HorizontalLoginForm extends Component {

    constructor(props) {
        super(props);
        // this.state = {
        //     visible: true,
        //     userName: '',
        //     roomID: '',
        //     isChat: false
        // }

        // this.state = {
        //     title: "",
        //     userIDs: [],
        //     imgURL: "",
        //     subtitle: "",
        //     urlPromo: ""
        // }

        this.state = {
            value: undefined,
            dataSource: [],
            listUser: [],
            serviceInfo: [],
            dataSourceServiceInfo: []
          };
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

       this.setUserInfo();
       this.props.loadListUserInfo();
       this.getServiceInfo();
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.message !== '' && this.props.message !== nextProps.message) {
            this.openNotification(nextProps.message)
        }
    }

    setUserInfo = () => {
        this.props.searchUserInfo("").then(data => {
            this.setState({dataSource: data});
        })
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
            "detail": "Ban đầu thay mới, nhưng tình trạng camera cũ quá có nhiều lỗi. Quyết định thay mới với module Vantech 122AD1.",
            "initCharge": "1000000",
            "receivedCharge": "1700000",
            "title": "Lắp đặt camera trước cửa tiệm",
            "type": "lắp đặt, camera",
            "userId": "24"
        });
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Form input', values);

                this.props.sentServiceInfo({
                    detail: values.detail,
                    initCharge: values.initCharge,
                    receivedCharge: values.receivedCharge,
                    title: values.title,
                    type: values.type,
                    userId: values.userId
                }).then(status => {
                    console.log("Status sent messsage: " + status);
                    if(status === true){
                        this.getServiceInfo();
                        this.openNotification("Thêm thành công.");
                    } else {
                        this.openNotification("Thêm bị lỗi, vui lòng thử lại sau.");
                    }
                });

            }
        });

    };

    handleChange = value => {
        this.setState({ value: value });
    }

    handleSearch = value => {
        if (value) {
            this.props.searchUserInfo(value).then(listUserInfo => {
                this.setState({ dataSource: listUserInfo });
            });
        } else {
            this.setUserInfo();
        }
    };

    render() {

        const { getFieldDecorator } = this.props.form;
        const { dataSource } = this.state;
        const children = this.buidListUserInfo(dataSource);

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
                        <h2>TẠO MỚI THÔNG TIN DỊCH VỤ KHÁCH HÀNG</h2>

                        <div>
                            <Form layout="vertical" onSubmit={this.handleSubmit} >

                                <Form.Item className="form-item" label="Tên dịch vụ" >
                                    {getFieldDecorator('title', {
                                        rules: [{ required: true, message: 'Vui lòng nhập tên dịch vụ.' }],
                                    })(
                                        <Input placeholder="" />,
                                    )}
                                </Form.Item>

                                <Form.Item className="form-item" label="Khách hàng" >
                                    {getFieldDecorator('userId', {
                                        rules: [{ required: true, message: 'Vui lòng nhập khách hàng.' }],
                                    })(

                                    <Select
                                        showSearch
                                        // value={this.state.value}
                                        placeholder="Nhập tên hoặc số điện thoại hoặc mail hoặc địa chỉ"
                                        // style={this.props.style}
                                        defaultActiveFirstOption={false}
                                        showArrow={true}
                                        filterOption={false}
                                        onSearch={this.handleSearch}
                                        onChange={this.handleChange}
                                        notFoundContent={null}
                                    >
                                        {children}
                                    </Select>
                                    )}
                                </Form.Item>

                                <Form.Item className="form-item" label="Loại" >
                                    {getFieldDecorator('type')(
                                        <Input placeholder="" />,
                                    )}
                                </Form.Item>

                                <Form.Item className="form-item" label="Chi tiết" >
                                    {getFieldDecorator('detail')(
                                        // <Input placeholder="" />,
                                        <TextArea rows={4} />,
                                    )}
                                </Form.Item>

                                <Form.Item className="form-item" label="Chi phí bỏ ra" >
                                    {getFieldDecorator('initCharge')(
                                        <Input placeholder="" />,
                                    )}
                                </Form.Item>

                                <Form.Item className="form-item" label="Tổng tiền thực nhận" >
                                    {getFieldDecorator('receivedCharge', {
                                        rules: [{ required: true, message: 'Vui lòng nhập tổng tiền thực nhận.' }],
                                    })(
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
                        <h2>DANH SÁCH DỊCH VỤ ĐÃ CUNG CẤP</h2>
                        <Table rowSelection={this.rowSelection} columns={columns} dataSource={this.state.dataSourceServiceInfo} />
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


    buidListUserInfo = (listUserInfo) => {
        return listUserInfo.map(userInfo => {
            let viewUserInfo = userInfo.name + " - " +
                                userInfo.phone + " - " +
                                userInfo.email + " - " +
                                userInfo.contact;
            return <Option key={userInfo.id}>{viewUserInfo}</Option>;
        })
    }

    builTableServices = (listServiceInfo) =>{
        let list = listServiceInfo.map(serviceInfo => ({
            key: serviceInfo.id,
            id: serviceInfo.id,
            title: serviceInfo.title,
            username: serviceInfo.userInfo.name,
            type: serviceInfo.type,
            initCharge: serviceInfo.initCharge,
            receivedCharge: serviceInfo.receivedCharge,
        }));
    
        return list;
    }

    getServiceInfo = () => {
        this.props.loadServiceInfo().then( listServiceInfo => {
                // console.log(listServiceInfo);
                let listServices = this.builTableServices(listServiceInfo);

                this.setState({
                    dataSourceServiceInfo: listServices,
                    serviceInfo: listServiceInfo
                });
                
        })
    }

    rowSelection = {
        // onChange: (selectedRowKeys, selectedRows) => {
        //     console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);

        //     let str = "";
        //     selectedRows.forEach(row => {

        //         str += row.id + ", ";
        //     });

        //     let strr = str.substring(0, str.length - 2);

        //     this.updateIDs(strr);
        //     console.log(strr);

        // },
        // getCheckboxProps: record => ({
        //     disabled: record.name === 'Disabled User', // Column configuration not to be checked
        //     name: record.name,
        // }),
    };
}



const columns = [
    {
        title: 'ID',
        dataIndex: 'id',
    },
    {
        title: 'Tên dịch vụ',
        dataIndex: 'title',
    },
    {
        title: 'Khách hàng',
        dataIndex: 'username',
    },
    {
        title: 'Loại',
        dataIndex: 'type',
    },
    {
        title: 'Chi phí ban đầu',
        dataIndex: 'initCharge',
    },
    {
        title: 'Chi phí thực nhận',
        dataIndex: 'receivedCharge',
    }
];

const mapStateToProps = state => ({
    message: state.sentBroadcastReducer,
    listUserInfo: state.loadListUserInfoReducer,
});

const mapDispatchToProps = (dispatch) => ({
    loadListUserInfo: () => dispatch(loadUserInfoService()),
    sentUserInfo: (userInfo) => dispatch(sentUserInfoService(userInfo)),
    searchUserInfo: (textSearch) => dispatch(searchUserInfo(textSearch)),
    sentServiceInfo: (serviceInfo) => dispatch(sentServiceInfoService(serviceInfo)),
    loadServiceInfo: () => dispatch(loadServiceInfo())
});

const ServicePage = Form.create({ name: 'horizontal_login' })(HorizontalLoginForm);


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ServicePage);

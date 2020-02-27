import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Layout, Menu, Icon} from 'antd';
import 'antd/dist/antd.css';
import {Input, Form, Button, notification, Table, AutoComplete, Select} from 'antd';
import {Calendar} from 'antd';
import moment from 'moment';
import axios from 'axios';


const {Header, Sider, Content} = Layout;
const {TextArea} = Input;
const {Option} = AutoComplete;

class BookingView extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            date: 0,
            thread_context: {}
        };
    }

    componentDidMount() {
        (function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) {
                return;
            }
            js = d.createElement(s);
            js.id = id;
            js.src = "//connect.facebook.net/en_US/messenger.Extensions.js";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'Messenger'));


    }

    componentWillReceiveProps(nextProps) {
    }


    onSelect = async (value) => {
        // console.log("Date= " + value);
        // this.setState({
        //     date: value
        // }, () => {
        //     console.log("Update state date= " + this.state.date);
        // })

        await this.setStateAsync({
            date: value
        });
        console.log("Update state date= " + this.state.date);
        return;
    };


    async getData() {
        const res = await axios.get('http://localhost:9080/order/2');
        console.log(res.data);
        const {data} = await res;
        // this.setState({serverResponse: data})

    };

    closeWebview = () => {
        window.MessengerExtensions.requestCloseBrowser(function success() {
        }, function error(err) {
            console.error(err, 'Unable to close window.', 'You may be viewing outside of the Messenger app.')
        })
    };

    onClickPSID = () => {
        // function updateState(data) {
        //     this.setState({
        //         thread_context: JSON.stringify(data)
        //     });
        // }

        window.MessengerExtensions.getContext("812277015837943",
            (thread_context) => {
                this.updateState(thread_context);
            }, (err) => {
                // error
                // this.updateState(err);
                console.log(err);
            }
        );

        // window.MessengerExtensions.getContext("812277015837943",
        //     function success(thread_context) {
        //         this.updateStateXX(thread_context);
        //     },
        //     function error(err) {
        //         // error
        //         this.updateStateXX(err);
        //     }
        // );
    };

    updateState(data) {
        console.log(JSON.stringify(data));
        this.setState({
            thread_context: data
        });
    }

    setStateAsync(state) {
        return new Promise((resolve) => {
            this.setState(state, resolve)
        });
    }

    onClick = async () => {
        // this.getData();
        // this.onClickPSID();
        this.booking();

        // this.closeWebview();


        // window.extAsyncInit = function() {
        //     // the Messenger Extensions JS SDK is done loading
        //     // window.MessengerExtensions.requestCloseBrowser(function success() {
        //     //     // webview closed
        //     //     window.close();
        //     // }, function error(err) {
        //     //     // an error occurred
        //     // });
        //     console.log("Messenger Extensions JS SDK is done loading.");
        //
        //     // window.MessengerExtensions.getContext('812277015837943',
        //     //     function success(thread_context){
        //     //         // success
        //     //         console.log(thread_context);
        //     //     },
        //     //     function error(err){
        //     //         // error
        //     //         // console.error(err);
        //     //         console.log(err);
        //     //     }
        //     // );
        //     window.MessengerExtensions.getUserID(
        //         function success(uids) {
        //             // User ID was successfully obtained.
        //             // $("div.test").html(
        //             //     "can probably do something with this id on the server to match it up: " +
        //             //     JSON.stringify(uids)
        //             // );
        //             this.setState({
        //                 thread_context: JSON.stringify(uids)
        //             });
        //             console.log("Messenger Extensions.");
        //
        //             // console.log(uids);
        //             // 	var psid = uids.psid;
        //         },
        //         function error(err) {
        //             this.setState({
        //                 thread_context: JSON.stringify(err)
        //             });
        //             // Error handling code
        //         }
        //     );
        // };

        // if (this.state.date === 0) {
        //     // this.setState({
        //     //     date: new Date().getTime()
        //     // }, () => {
        //     //     console.log("You choose date= " + moment(this.state.date).format('YYYY-MM-DD HH:mm'));
        //     // });
        //     await this.setStateAsync({
        //         date: new Date().getTime()
        //     });
        //     console.log("You choose date= " + moment(this.state.date).format('YYYY-MM-DD HH:mm'));
        //     return
        // }

        // window.extAsyncInit = function() {
        //     // the Messenger Extensions JS SDK is done loading
        //     window.MessengerExtensions.requestCloseBrowser(function success() {
        //         // webview closed
        //         window.close();
        //     }, function error(err) {
        //         // an error occurred
        //     });
        // };
        //
        // try {
        //     // fetch data from a url endpoint
        //     const data = await axios.get("/some_url_endpoint");
        //     return data;
        // } catch(error) {
        //     console.log("error", error);
        //     // appropriately handle the error
        // }


        // console.log("You choose date= " + moment(this.state.date).format('YYYY-MM-DD HH:mm'));
    };

    render() {
        return (
            <div style={{margin: '0 auto', width: 300}}>
                <div style={{marginBottom: 10, width: 300, border: '1px solid #d9d9d9', borderRadius: 4}}>
                    <Calendar fullscreen={false} onSelect={this.onSelect}/>
                </div>

                <Button onClick={this.onClick} type="primary" block>Chọn</Button>
                {/*<Button onClick={this.onClickPSID} type="primary" block>PSID</Button>*/}
                {/*<p>Mess: {JSON.stringify(this.state.thread_context)}</p>*/}
            </div>
        )
    }

    getTime = async () => {
        if (this.state.date === 0) {
            await this.setStateAsync({
                date: new Date().getTime()
            });
            // console.log("You choose date= " + moment(this.state.date).format('YYYY-MM-DD HH:mm'));
        }

        return await this.state.date;
    };

    booking = async () => {

        // get time and PSID
        let date = await this.getTime();
        console.log("You choose date= " + moment(date).format('YYYY-MM-DD HH:mm'));

        let psid = await this.getPsid();
        console.log("Psid= " + psid);

        // sent
        let path = "https://cmc.cbsys.ga/webview/table/" + psid + "/" + date;
        const res = await axios.get(path);
        console.log(res.data);
        const {data} = await res;

        // close
        this.closeWebview();
    };

    getPsid = async () => {
        await this.updateThreadContext();
        let thead = this.state.thread_context;
        console.log(thead.psid);
        return thead.psid;
    };

    updateThreadContext = () => {
        return new Promise((resolve, reject) => {
            window.MessengerExtensions.getContext("812277015837943",
                (thread_context) => {
                    this.setState({
                        thread_context: thread_context
                    }, () => {
                        console.log("update");
                        console.log(JSON.stringify(this.state.thread_context));
                        resolve();
                    });
                }, (err) => {
                    console.log(err);
                    resolve();
                }
            );

        })
    };
}


const mapStateToProps = state => ({});

const mapDispatchToProps = (dispatch) => ({});


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BookingView);

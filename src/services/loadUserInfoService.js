import axios from 'axios';
// import { sentBroadcastAction } from './../redux/actions/sentBroadcastAction'
// import { sentUserInfoAction } from '../redux/actions/sentUserInfoAction'
import { loadListUserInfoAction } from '../redux/actions/loadListUserInfoAction'

// import { Actions } from './types';

// export const sentBroadcastAction = (dataPromo) => ({
//     type: Actions.SENT_BROAD_CAST,
//     payload: dataPromo
// });

// let url = "https://graph.facebook.com/v2.6/me/messages?access_token=EAALiwvr8ZCPcBADFceATfPmcbLbtanvDSmzOGD4E8s31s7W5PNjdik9KUdFVxOV0rF1JxV3XiNeXhYWGl6lrsmBcbqzdnqWU8ZCWWovPxZCYWbK5oSPSLaigNJZBVtLkIH1qRIUgSZAQMsktNQRLEcL2oNU7ZBgKXgPd62y3Y0LN0hFNkBOCAjia8fW5ZA4qPQZD";

// let url = "https://d043188c.ngrok.io/promotion";

let url = "http://localhost:8080/user/all";

const loadUserInfoService = () => {

    // let data = {
    //     reqPromo: dataPromo
    // }

    // let data = {
    //     "reqPromo": {
    //         "title": "Mua 1 tặng 2 nha nhamx",
    //         "userIDs": ["2095752627127344", "2519322754747321"],
    //         "imgURL": "https://www.johornow.com/wp-content/uploads/sites/2/2017/12/1-min-14.jpg",
    //         "subtitle": "Chương trình khuyến mãi dành cho thành viên VIP.",
    //         "urlPromo": "https://google.com"
    //     }
    // }

    // let jsonUser = JSON.stringify(userInfo);


    // return (dispatch, getState) => {

    //     return axios.post(url, data)
    //         .then(response => {
    //             let message = response.data + " status: " + response.status;
    //             console.log(message);
    //             // dispatch(sentBroadcastAction(message));
    //         }).catch(error => console.error(error));


    //     // // console.log(data);
    //     // let status = false;
    //     // let listUserID = dataPromo.userIDs;

    //     // listUserID.forEach(senderID => {
    //     //     status = sentPromotion(senderID, dataPromo);

    //     //     if (!status)
    //     //         return false;
    //     // });

    //     // return true;

    //     // return axios.post(
    //     //     'http://localhost:6898/getListConversations',
    //     //     null, // { name: 'Waffle Iron', price: 21.50 },
    //     //     { responseType: 'arraybuffer' }
    //     // )
    //     //     .then(response => {

    //     //         // console.log(response.data);
    //     //         const bytes = new Uint8Array(response.data);
    //     //         // console.log(bytes);
    //     //         let data = listCon.decode(bytes);
    //     //         // console.log("data", data.listConversations);

    //     //         console.log("data.listConversations", data.listConversations);

    //     //         // dispatch(loadListConversationsAction(listConversations));
    //     //         dispatch(loadListConversationsAction(data.listConversations));
    //     //     })
    //     //     .catch(error => console.error(error));
    // }



    // return (dispatch, getState) => {
    //     return axios.post(
    //         url,
    //         jsonData,
    //         {
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             }
    //         }
    //     ).then(response => {
    //         // const bytes = new Uint8Array(response.data);
    //         // let data = listm.decode(bytes);
    //         // console.log("data", data.listMessages);
    //         console.log("Response call api {}, data received {}", url, response);

    //         // let message = response.data + " status: " + response.status;
    //         // console.log(message);

    //         // dispatch(sentUserInfoAction(message));

    //     }).catch(error => console.error(error));
    // };



    // const root = protobuf.Root.fromJSON(require("./protobuf/BundleResponse.json"));
    // const listCon = root.lookupType("protobuf.ListConversations");

    return (dispatch, getState) => {
        return axios.post(
            url,
            null,
            { headers: {'Content-Type': 'application/json'} }
        ).then(response => {
                console.log("Response call api {}, data received {}", url, response);
                let listUserInfo = buildTableForm(response.data);
                
                dispatch(loadListUserInfoAction(listUserInfo));
         }).catch((error) => console.error(error));
    };
};

const buildTableForm = (listUserInfo) =>{
    let list = listUserInfo.map(userInfo => ({
        key: userInfo.id,
        id: userInfo.id,
        contact: userInfo.contact,
        email: userInfo.email,
        name: userInfo.name,
        phone: userInfo.phone
    }));

    return list;
}



const searchUserInfo = (textSearch) => {

    let urlGetUser = "http://localhost:8080/user/find";
    var searchParams = new URLSearchParams();
    searchParams.set("text", textSearch);

    return (dispatch, getState) => new Promise(function(resolve, reject) {
        axios.post(
            urlGetUser,
            searchParams
        ).then(response => {
                // console.log("Response call api {}, data received {}", urlGetUser, response.data);
                resolve(response.data);
         }).catch((error) => {
            reject([]);
            console.error(error);
         });
    });
}

export {
    loadUserInfoService,
    searchUserInfo
}

    // async function sentPromotion(senderID, reqPromo) {

    //     let content = {
    //         "recipient": {
    //             "id": senderID
    //         },
    //         "message": {
    //             "attachment": {
    //                 "type": "template",
    //                 "payload": {
    //                     "template_type": "generic",
    //                     "elements": [
    //                         {
    //                             "title": reqPromo.title,
    //                             "image_url": reqPromo.imgURL,
    //                             "subtitle": reqPromo.subtitle,
    //                             "buttons": [
    //                                 {
    //                                     "type": "web_url",
    //                                     "url": reqPromo.urlPromo,
    //                                     "title": "Xem thêm"
    //                                 }, {
    //                                     "type": "postback",
    //                                     "title": "Xem menu",
    //                                     "payload": "Xem menu"
    //                                 }
    //                             ]
    //                         }
    //                     ]
    //                 }
    //             }
    //         }
    //     };

    //     await axios.post(url, content)
    //         .then(response => {
    //             console.log("Broadcast " + senderID + " " + response.status)
    //             return true;
    //         })
    //         .catch(error => {
    //             console.log("Broadcast " + senderID + " " + error.response)
    //             return false;
    //         });
    // };
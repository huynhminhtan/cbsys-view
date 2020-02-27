import { loadListConversationsAction } from '../redux/actions/loadListConversationsAction'
import { loadMessagesAction } from '../redux/actions/loadMessagesAction'
import protobuf from "protobufjs";
import axios from 'axios';

import { dataTest } from '../DataTest';

// export const loadListConversations = () => new Promise((resolve, reject) => {
//     // Realm.open(databaseOptions).then(realm => {
//     //     let currentUser = realm.objects(USER_SCHEMA)[0]; // get first user
//     //     resolve(currentUser);
//     // }).catch((err) => reject(err));

//     // fetch data from server


// });


// export const thunk_action_creator = username => {
//     const user = username.replace(/\s/g, "");
//     store.dispatch(fetch_post());
//     return function(dispatch, getState) {
//       return fetch(`https://api.github.com/users/${user}`)
//         .then(data => data.json())
//         .then(data => {
//           if (data.message === "Not Found") {
//             throw new Error("No such user found!!");
//           } else dispatch(receive_post(data));
//         })
//         .catch(err => dispatch(receive_error()));
//     };
//   };



/**
 * Use middleware React Thunk to load list conversations from server, 
 * then dispatch and save it to state.
 * 
 * {
 *      conversationName: "Uyển Vy"
 *      userCreate: "mtsinichi"
 * }
 * 
 */

const loadListConversations = () => {

    // const root = protobuf.Root.fromJSON(require("./bundle.json"));
    // const AwesomeMessage = root.lookupType("AwesomeMessage");

    // const root = protobuf.Root.fromJSON(require("./bundleHello.json"));
    // const hello = root.lookupType("protobuf.Message");

    // let message = AwesomeMessage.create({ awesomeField: "hello" });
    // console.log(`message = ${JSON.stringify(message)}`);

    // let buffer = AwesomeMessage.encode(message).finish();
    // console.log(`buffer = ${Array.prototype.toString.call(buffer)}`);

    // let decoded = AwesomeMessage.decode(buffer);
    // console.log(`decoded = ${JSON.stringify(decoded)}`);


    const root = protobuf.Root.fromJSON(require("./protobuf/BundleResponse.json"));
    const listCon = root.lookupType("protobuf.ListConversations");

    return (dispatch, getState) => {

        return axios.post(
            'http://localhost:6898/getListConversations',
            null, // { name: 'Waffle Iron', price: 21.50 },
            { responseType: 'arraybuffer' }
        )
            .then(response => {

                // console.log(response.data);
                const bytes = new Uint8Array(response.data);
                // console.log(bytes);
                let data = listCon.decode(bytes);
                // console.log("data", data.listConversations);

                console.log("data.listConversations", data.listConversations);

                // dispatch(loadListConversationsAction(listConversations));
                dispatch(loadListConversationsAction(data.listConversations));
            })
            .catch(error => console.error(error));
    };
};




// loadMessageOfCurrentConversation: (name) => dispatch(
//     loadMessagesAction(listMessages)
// )


/**
 * Use middleware React Thunk to load list messsages by conversations from server, 
 * then dispatch and save it to state.
 */

let axiosConfig = {
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        "Access-Control-Allow-Origin": "*",
    }
};

/**
 * 
 * Load list message of current conversation by middle ware Thunk
 * 
 */
const loadListMessagesByConversations = (conversationName) => {

    const root = protobuf.Root.fromJSON(require("./protobuf/BundleResponse.json"));
    const listm = root.lookupType("protobuf.ListMessages");

    const rootRequest = protobuf.Root.fromJSON(require("./protobuf/BundleRequest.json"));
    const conv = rootRequest.lookupType("protobuf.Conversations");

    console.log(conversationName);

    // Create a new message // or use .fromObject if conversion is necessary
    let conversationRequest = conv.create({ conversationName: conversationName });

    // Encode a message to an Uint8Array (browser) or Buffer (node)
    var buffer = conv.encode(conversationRequest).finish();

    return (dispatch, getState) => {

        return axios.post(
            'http://localhost:6898/getListMessagesByConversations',
            toArrayBuffer(buffer),
            {
                responseType: 'arraybuffer',
                // headers: { 'Content-Type': 'application/octet-stream' }
            }
        ).then(response => {
            const bytes = new Uint8Array(response.data);
            let data = listm.decode(bytes);
            // console.log("data", data.listMessages);

            console.log("data.listMessages", data.listMessages)
            dispatch(loadMessagesAction(data.listMessages));

        }).catch(error => console.error(error));
    };


    // console.log("load message", conversationName);
};

export {
    loadListConversations,
    loadListMessagesByConversations
}

// From Buffer to ArrayBuffer:
function toArrayBuffer(buf) {
    var ab = new ArrayBuffer(buf.length);
    var view = new Uint8Array(ab);
    for (var i = 0; i < buf.length; ++i) {
        view[i] = buf[i];
    }
    return ab;
}
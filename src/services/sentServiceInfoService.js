import axios from 'axios';

let url = "http://localhost:8080/service/add";

const sentServiceInfoService = (serviceInfo) => {

    let data = {
        "data" : {
            "service": serviceInfo
        },
        "statusCode": 1 
    }

    let jsonData = JSON.stringify(data);
    console.log("Sent url {}, with data {} ", url, jsonData);

    return (dispatch, getState) => new Promise(function(resolve, reject) {
        axios.post(
            url,
            jsonData,
            {
                headers: {
                    'Content-Type': 'application/json',
                }
            }
        ).then(response => {
            console.log("Response call api {}, data received {}", url, response);
            resolve(true);
        }).catch(error => {
            reject(false);
            console.log("Error sent userinfo url {}", url, JSON.stringify(error));
        });
    });
};

let urlLoadServices = "http://localhost:8080/service/all";

const loadServiceInfo = () => {
    return (dispatch, getState) => new Promise(function(resolve, reject) {
        axios.post(
            urlLoadServices,
            null,
            { headers: {'Content-Type': 'application/json'} }
        ).then(response => {
                console.log("Response call api {}, data received {}", urlLoadServices, response);
                resolve(response.data);
         }).catch(error => {
            reject([]);
            console.log("Error sent userinfo url {}", urlLoadServices, JSON.stringify(error));
        });
    });
};

export {
    sentServiceInfoService,
    loadServiceInfo
}

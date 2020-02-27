const handleWebsocket = (websocket) => {

    websocket.onopen = function(event) {
        // Register username with server
        websocket.send('register:' + "mtsinichi:111");
    };


    websocket.onmessage = (evt) => {
        // this.props.onMessage(evt.data);
        console.log(evt.data);
    };


}


export default handleWebsocket;
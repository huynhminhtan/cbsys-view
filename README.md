
# CBSYS VIEW

## How to run

- updrage node, run `npm install -g node@11.10.0`
- run `npm install`, then `npm start`

```txt
✗ node --version
v11.10.0
✗ npm --version
6.12.1
```

## Note

```text

 ./node_modules/.bin/pbjs -t json ./src/services/awesome.proto > bundle.json


https://gist.github.com/c-bata/876c088e1c00a2237ee1352f02da192a


JSON is Not Cool Anymore: Implementing Protocol Buffers in Node.js
https://webapplog.com/json-is-not-cool-anymore/
```

## API

http://localhost:6898/getListConversations

```json
[
    {
        conversationName: "Uyển Vy"
        userCreate: "mtsinichi"
    },
    {
        conversationName: "Class 12A"
        userCreate: "mtsin1111i"
    }
]

```

http://localhost:6898/getListMessagesByConversations

```json
[
    {
        content: "Không nó chạy qua chạu lại"
        time: "32/01/2009"
        userSend: "Hoài Linh"
    },
    {
        content: "Không nó chạy qua chạu lại"
        time: "32/01/2009"
        userSend: "Hoài Linh"
    }
]
```


## Node Errors

#### ERROR: Gettin Exception Google.Protobuf.InvalidProtocolBufferException

Refer: 
- https://github.com/protocolbuffers/protobuf/issues/3996

` Can you verify that the serialized message is the same on both sides (i.e. the same length and the same serialized bytes)?  `

Resloved

```

// Encode a message to an Uint8Array (browser) or Buffer (node)
var buffer = conv.encode(conversationRequest).finish();
>> convert Buffer to Uint8Array ( be use Java/Netty)
https://stackoverflow.com/questions/8609289/convert-a-binary-nodejs-buffer-to-javascript-arraybuffer

```

Error descriptions

```

Client React/Nodejs:
POST http://localhost:6898/getListMessagesByConversations net::ERR_EMPTY_RESPONSE
index.js:1446 Error: Network Error
    at createError (createError.js:17)
    at XMLHttpRequest.handleError (xhr.js:87)

Server: Java/Netty
com.google.protobuf.InvalidProtocolBufferException: Protocol message contained an invalid tag (zero).

```

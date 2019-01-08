# Bitrix24Sender
Birtri24Sender -  send message to Discord chat.(Will return PROMISE to you)  
Require [got](https://www.npmjs.com/package/got) dependency
 

## How to use
1. Clone or download
2. Install latest version of [node.js](https://nodejs.org/en/)
3. ```npm i got``` from your terminal in directory with Birtri24Parser
3. Select on of available methods from "sender" object and call it with discord webhook URL and payload (header param are optional)

#### Discord webhook usage example
```
const { post } = require('../bitrix24Sender')

let discordWebhookUrl
let payload
await post(discordWebhookUrl, payload)
    .then(responce => console.log(responce))
    .catch(err => console.log(err))
```

## "post" method
Post method are [asynchronous function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function), that will return promise to you and send up your payload to specified webhook URL.
discordWebhookUrl can be set as [environment variable](https://en.wikipedia.org/wiki/Environment_variable)

"discordWebhookUrl" param must contain a [webhook URL from Discord](https://discordapp.com/developers/docs/resources/webhook)

"payload" can be formed with [Bitrix24Parser](https://github.com/BobrovAndrey/Bitrix24Parser)


! "post" will send "payload" as JSON string  
! "header" are optional param and sets to 'Content-Type': 'application/x-www-form-urlencoded' by default
## License

[MIT](LICENSE)
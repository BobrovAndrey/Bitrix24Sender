# Bitrix24Sender
Birtri24Sender -  send message to Discord chat.  
Will return PROMISE to you  
Work with "got" https://www.npmjs.com/package/got  

## How to use
1. Require necessary method from bitrix24Sender.js
2. Select on of available methods from "sender" object and call it with discord webhook URL and payload (header param are optional)

#### Discord webhook usage example

``
const { post } = require('../bitrix24Sender')

let discordWebhookUrl
let payload
await post(discordWebhookUrl, payload)
    .then(responce => console.log(responce))
    .catch(err => console.log(err))
``

## "post" method
Post method are asynchronous function, that will return promise to you.  

discordWebhookUrl can be set as environment variable [ENV](https://en.wikipedia.org/wiki/Environment_variable)



## License

[MIT](LICENSE)
const got = require('got')
const sender = {}

// Send payload (return promise)
sender.post = async function (discordWebhookUrl, payload, header = { 'Content-Type': 'application/x-www-form-urlencoded' }) {
  return got.post(discordWebhookUrl, {
    headers: header,
    body: JSON.stringify(payload)
  })
}

module.exports = sender

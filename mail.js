'use strict'

const nodemailer = require('nodemailer')

let mailerConfig = {
  connection: {
    service:'gmail',
    auth: {
      user: 'user@domain.com',
      pass: 'password'
    }
  },
  message: {
    from: '\"Alert\" <no-reply@domain.com>',
    to: 'user@domaim.com',
    subject: 'Failure Alert!!',
    priority: 'high',
    text: `Failure Alert!!`
  }
}
const transporter = nodemailer.createTransport(mailerConfig.connection)
function errorSend (text) {
  mailerConfig.message.text = text
  transporter.sendMail(mailerConfig.message, (error, info) => {
    if (error) console.log(error)
    console.log('\n------> Message sent!')
    process.exit(0)
  })
}

module.exports = errorSend

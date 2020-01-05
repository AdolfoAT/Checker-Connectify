# Shoretel-Test

Checa la conectividad de equipos en la red con direcciones IP assignadas estaticamente

This project was bootstrapped with [Node.js](https://nodejs.org/es/).

## Available Scripts

Use

### `npm i`

Install all Script dependences

In the project directory, you can run:

### `mocha --timeout 3500 /index.js`

Check the conectify of the ShoreTel Server with a Ping command on Terminal, if have packages lost maybe had some problems on connectify.

How it can use in crontab

execute contrab -e and  add this code in the file and save, you can check if the contrab run only check the file checker.log
Check node and mocha directory and version, change it if is needed. 

### `*/5 * * * * /home/pi/.nvm/versions/node/v10.16.1/bin/node /home/pi/.nvm/versions/node/v10.16.1/bin/mocha --timeout 3500 ~/Checker-Connectify/index.js --reporter ~/Checker-Connectify/reporter.js >> ~/Checker-Conectify/checker.log`

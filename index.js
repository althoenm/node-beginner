// sync = blocking. Will need to finish before moving on to next line
// const { readFile, readFileSync } = require('fs')

// const txt = readFileSync('./hello.txt', 'utf8')

// readFile('./hello.txt', 'utf8', (err, data) => {
//   if (err) {
//     console.log(err)
//   }
//   console.log(txt)
// })

// ****** Using Promises ******

// const { readFile } = require('fs').promises;
// // await resolves the promise at the end of the line
// //const file = await readFile('./hello.txt', 'utf8');

// async function hello() {
//     const file = await readFile('./hello.txt', 'utf8');
// }

// ***** Using My Own Module *****

// const { readFile } = require('fs');
// const myModule = require('./my-module');

// console.log(myModule)

// ***** Using Express *****
// express allows us to create a server and endpoints that a user can hit
const express = require('express');
const { readFile } = require('fs').promises;
const app = express();

app.get('/', async (req, res) => {
    res.send(await readFile('./home.html', 'utf8'));
});

app.listen(process.env.PORT || 3000, () => console.log('App available on http://localhost:3000'))
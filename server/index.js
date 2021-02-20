/*  B"H
*/

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app
    .get('/', (req, res) => {
    res.send('Hello!')
    })
    .get('/purim', (req, res) => {
        res.send('Astala vista!');
    })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
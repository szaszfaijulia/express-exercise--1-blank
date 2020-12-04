const http = require('http');
const url = require('url');
const port = '3456';
const fs = require('fs');
const path = require('path');
const express = require('express');

const app = express();

/*app.get('/', (req, res) => {
  res.send('Hello Express app!')
});*/

//console.log(__dirname);
app.use(express.static(path.join(__dirname, 'public')));    //2)

app.use('/css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')));   //4)
app.use('/js', express.static(path.join(__dirname, 'node_modules/jquery/dist')));



app.listen(3000, () => {
  console.log('server started');
});
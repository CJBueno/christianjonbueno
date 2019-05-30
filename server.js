const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.static(__dirname + '/public/dist/public'));

require('./server/config/routes.js')(app);

app.all("*", (req,res,next) => {
    res.sendFile(path.resolve("./public/dist/public/index.html"))
  });

app.listen('8000', function(){
    console.log('8000')
})
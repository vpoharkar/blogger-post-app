const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');
const config = require('./config/database');
const path = require('path');


mongoose.Promise = global.Promise;
mongoose.connect(config.uri, (err) => {
    if (err) {
        console.log('Could not connect to database ', err);
    } else {
        console.log(config.secret);
        console.log('Connected to database: ', config.db);
    }
});

app.use(express.static(__dirname + '/blogger-post-ui/dist/blogger-post-ui'));

app.get('*', (req, res) => { 
    res.sendFile(path.join(__dirname + '/blogger-post-ui/dist/blogger-post-ui/index.html'));
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
});
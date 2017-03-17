'use strict';

const express = require('express'),
         http = require('http'),
       router = express(),
       server = http.createServer(router);
       
router.get('/', (req, res, next) => {
   res.send('<h1>Hello world!</h1>');
   next();
});

server.listen(process.env.PORT || 3000, process.env.IP || '0.0.0.0', () => {
    console.log('Server running!');
});
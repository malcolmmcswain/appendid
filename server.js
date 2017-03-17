'use strict';

const express = require('express'),
         http = require('http'),
       router = express(),
       server = http.createServer(router);

router.use(express.static(`${__dirname}/public/docs`));

router.set('view engine', 'pug');
router.set('views', `${__dirname}/templates`);

router.get('/', (req, res, next) => {
   res.render('index', { title: 'Home', name: 'Malcolm' });
   next();
});

server.listen(process.env.PORT || 3000, process.env.IP || '0.0.0.0', () => {
    console.log('Server running!');
});

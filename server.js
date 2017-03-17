'use strict';

const express = require('express'),
         http = require('http'),
       router = express(),
       server = http.createServer(router);

router.use(express.static(`./public`));

router.set('view engine', 'pug');
router.set('views', `${__dirname}/templates`);

router.get('/', (req, res, next) => {
  res.render('index', { title: 'Home' });
  next();
});

router.get('/profile', (req, res, next) => {
  res.render('profile', { title: 'My Profile' });
  next();
});

router.get('/notifications', (req, res, next) => {
  res.render('notifications', { title: 'Notifications' });
  next();
});

server.listen(process.env.PORT || 3000, process.env.IP || '0.0.0.0', () => {
  console.log('Server running!');
});

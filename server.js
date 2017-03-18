'use strict';

const express = require('express'),
         http = require('http'),
       router = express(),
       server = http.createServer(router);

router.use(express.static(`./public`));

router.set('view engine', 'pug');
router.set('views', `${__dirname}/views`);

router.get('/', (req, res, next) => {
  res.render('index', {
    page: 'index',
    title: 'Home'
  });
  next();
});

router.get('/login', (req, res, next) => {
  res.render('login', {
    page: 'login',
    title: 'Login'
  });
});

router.get('/profile', (req, res, next) => {
  res.render('profile', {
    page: 'profile',
    title: 'My Profile'
  });
  next();
});

router.get('/notifications', (req, res, next) => {
  res.render('notifications', {
    page: 'notifications',
    title: 'Notifications'
  });
  next();
});

router.get('/api-documentation', (req, res, next) => {
  res.render('docs', {
    page: 'docs',
    title: 'API Documentation'
  });
});

server.listen(process.env.PORT || 3000, process.env.IP || '0.0.0.0', () => {
  console.log('Server running!');
});

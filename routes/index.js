const express = require('express');
const router = express.Router();
const tweetBank = require('../tweetBank');

router.get('/', function(req, res) {
	let AllTheTweets = tweetBank.list();
	res.render('index', { tweets: AllTheTweets, showForm: true});
});

router.get('/users/:name', function(req, res, next) {
	var tweetsForName = tweetBank.find({name: req.params.name})
	res.render('index', {tweets: tweetsForName, showForm: true, username: req.params.username});
});

router.get('/tweets/:id', function(req, res, next) {
	var tweetsWithThatId = tweetBank.find({id: Number(req.params.id)})
	res.render('index', {tweets: tweetsWithThatId});
});

router.post('/tweets', function(req, res, next) {
	tweetBank.add(req.body.name, req.body.text);
	res.redirect('/');
})

// router.get('/stylesheets/style.css', function(req, res, next) {
// 	res.sendFile('/stylesheets/style.css', { root: __dirname + '/../public/' })
// })

module.exports = router;
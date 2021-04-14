const express = require('express');
const router = express.Router();

const about = require('./about');
const post = require('./post');
const api = require('./api');

router.use('/about', about);
router.use('/post', post);
router.use('/api', api);

// 기본 경로
router.get('/', (req, res, next) => { res.send("홈"); });


module.exports = router;

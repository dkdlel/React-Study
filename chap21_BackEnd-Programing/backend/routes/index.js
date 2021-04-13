const express = require('express');
const router = express.Router();

const about = require('./about');
const post = require('./post');

router.use('/about', about);
router.use('/post', post);

// 기본 경로
router.get('/', (req, res, next) => { res.send("홈"); });


module.exports = router;

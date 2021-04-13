const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {

    const { id } = req.query;

    if (id) res.send(`포스트 #${id}`);
    else res.send('포스트 아이디가 없습니다.');

});


module.exports = router;

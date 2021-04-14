const express = require('express');
const router = express.Router();

const printInfo = (req, res) => {
    req.body = {
        method: req.method,
        path: `/api${req.path}`,
        params: req.params,
    };
    res.send(req.body);
};

router.get('/post', printInfo);
router.post('/post', printInfo);
router.get('/post/:id', printInfo);
router.delete('/post/:id', printInfo);
router.put('/post/:id', printInfo);
router.patch('/post/:id', printInfo);


module.exports = router;

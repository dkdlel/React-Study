const express = require('express');
const router = express.Router();

/* GET home page. */
// router.get('/', function (req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get('/', (req, res) => {
  console.log(req.query.test);
  res.send('Hello Query World!');
});

router.get('/:test', (req, res) => {
  console.log(req.params.test);
  res.send('Hello Params World!');
});

module.exports = router;

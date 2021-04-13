const express = require('express');
const router = express.Router();

router.get('/:name?', (req, res, next) => {
  const { name } = req.params;

  if (name) res.send(`${name}의 소개`);
  else res.send('소개');

});


module.exports = router;

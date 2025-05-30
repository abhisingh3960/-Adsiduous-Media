const express = require('express');
const router = express.Router();
const rateLimiter = require('../middleware/rateLimiter');

router.post('/request', rateLimiter, (req, res) => {
  res.json({ allowed: true, message: 'Request allowed' });
});

module.exports = router;
const express = require('express');
const router = express.Router();
const { addMeeting, checkMeetings } = require('../controllers/schedulerController');

router.post('/add', addMeeting);
router.get('/check', checkMeetings);

module.exports = router;
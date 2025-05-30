const Meeting = require('../models/Meeting');
// check meeting
exports.checkMeetings = async (req, res) => {
  try {
    const meetings = await Meeting.find();
    const intervals = meetings.map(m => [m.start, m.end]);

    intervals.sort((a, b) => a[0] - b[0]);

    let rooms = [];
    for (let i = 0; i < intervals.length; i++) {
      let assigned = false;
      for (let j = 0; j < rooms.length; j++) {
        if (rooms[j] <= intervals[i][0]) {
          rooms[j] = intervals[i][1];
          assigned = true;
          break;
        }
      }
      if (!assigned) rooms.push(intervals[i][1]);
    }

    res.json({ oneRoomEnough: rooms.length === 1, minRooms: rooms.length });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// add metting 
exports.addMeeting = async (req, res) => {
  try {
    const { start, end } = req.body;
    const meeting = new Meeting({ start, end });
    await meeting.save();
    res.status(201).json(meeting);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

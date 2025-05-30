const RequestLog = require('../models/RequestLog');

const limit = 3;
const windowSec = 60;

module.exports = async function rateLimiter(req, res, next) {
  const userId = req.body.userId;
  const currentTime = Math.floor(Date.now() / 1000);

  const logs = await RequestLog.find({
    userId,
    timestamp: { $gte: currentTime - windowSec }
  });

  if (logs.length >= limit) {
    return res.status(429).json({ allowed: false, message: 'Rate limit exceeded' });
  }

  const log = new RequestLog({ userId, timestamp: currentTime });
  await log.save();

  next();
};

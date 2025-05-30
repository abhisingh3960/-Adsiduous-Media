const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const schedulerRoutes = require('./routes/schedulerRoutes');
const apiRoutes = require('./routes/apiRoutes');

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

app.use('/api/scheduler', schedulerRoutes);
app.use('/api/limited', apiRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
const fs = require('fs');
const path = require('path');
const express = require('express');
const morgan = require('morgan');
const routes = require('./routes');

const app = express();

// 🔧 Create a write stream (in append mode)
const accessLogStream = fs.createWriteStream(
  path.join(__dirname, 'logs', 'access.log'),
  { flags: 'a' }
);

// 📋 Log to console and also to file
app.use(morgan('combined', { stream: accessLogStream }));
app.use(morgan('dev')); // Optional: also log to console for dev

app.use(express.json());
app.use('/', routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;

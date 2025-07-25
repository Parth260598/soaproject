const fs = require('fs');
const path = require('path');
const express = require('express');
const morgan = require('morgan');
const routes = require('./routes');

const app = express();

// ✅ Ensure 'logs' directory exists before writing
const logDir = path.join(__dirname, 'logs');
if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir);
}

// 🔧 Create a write stream (in append mode)
const accessLogStream = fs.createWriteStream(
  path.join(logDir, 'access.log'),
  { flags: 'a' }
);

// 📋 Log to file and console
app.use(morgan('combined', { stream: accessLogStream }));
app.use(morgan('dev')); // Optional: log to console for development

app.use(express.json());
app.use('/', routes);

const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app; // ✅ Export app for testing


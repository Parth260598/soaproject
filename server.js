const express = require('express');
const routes = require('./routes');
const app = express();

app.use(express.json());
app.use('/', routes);

const PORT = process.env.PORT || 3000; // ✅ Fix added here

const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app; // ✅ Exported for Jest tests




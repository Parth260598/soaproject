const express = require('express');
const router = express.Router();

const users = [];

router.post('/users/register', (req, res) => {
  const { username } = req.body;
  const id = users.length + 1;
  users.push({ id, username });
  res.status(201).send({ id, username });
});

router.get('/users/:id', (req, res) => {
  const user = users.find(u => u.id == req.params.id);
  if (!user) return res.status(404).send({ error: 'User not found' });
  res.send(user);
});

module.exports = router;

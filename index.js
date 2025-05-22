const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const allowedPCs = {
  "johnson": "HASH123456"
};

app.get('/verify/:user/:hash', (req, res) => {
  const { user, hash } = req.params;
  if (allowedPCs[user] && allowedPCs[user] === hash) {
    res.json({ status: 'valid' });
  } else {
    res.json({ status: 'invalid' });
  }
});

app.listen(PORT, () => {
  console.log(`API running on port ${PORT}`);
});

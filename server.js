require('dotenv').config();

const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

/* =========================
   LOGIN ADMIN SIMPLE
========================= */

app.post('/api/admin/login', (req, res) => {
  const { password } = req.body;

  if (password === process.env.ADMIN_PASSWORD) {
    return res.json({ ok: true });
  }

  res.json({ ok: false });
});

/* =========================
   SERVIDOR
========================= */

app.listen(PORT, () => {
  console.log(`🚀 PointMasters corriendo en http://localhost:${PORT}`);
});

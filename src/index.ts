import express from 'express';

const app = express();

app.get('/', (_req, res) => {
  res.status(500).json({
    hi: 'dimas b',
  });
});

app.listen(3000, () => {
  console.log('[Server was up⚡]');
});

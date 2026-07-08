import 'dotenv/config';
import app from './app.js';
import db from './config/database.js';

const port = Number(process.env.PORT) || 8000;

app.listen(port, () => {
  console.log(`OctoFit Tracker API listening on port ${port}`);
});

process.on('SIGINT', async () => {
  await db.close();
  process.exit(0);
});

import cors from 'cors';
import express from 'express';
import db from './config/database.js';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/api/health', (_request, response) => {
  response.json({
    status: 'ok',
    database: db.readyState === 1 ? 'connected' : 'disconnected'
  });
});

export default app;

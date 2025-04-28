const forceDatabaseRefresh = false;

import dotenv from 'dotenv';
dotenv.config();

import express, { Request, Response } from 'express';
import path from 'path'; // ✅ Import path
import { sequelize } from './models/index.js';
import routes from './routes/index.js';

const app = express();
const PORT = process.env.PORT || 3002;

// Middleware to parse JSON
app.use(express.json());

// API routes
app.use(routes);

// ✅ Serve static files from the React build
const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, '../client/dist')));

// ✅ Catch-all handler to serve React's index.html on unknown routes
app.get('*', (_req: Request, res: Response) => {

  res.sendFile(path.join(__dirname, '../client/dist', 'index.html'));
});

// Database connection and server start
sequelize.sync({ force: forceDatabaseRefresh }).then(() => {
  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });
});

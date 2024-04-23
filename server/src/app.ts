// server.ts

import express, { Request, Response } from 'express';
import axios from 'axios';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import path from 'path';

dotenv.config({ path: path.resolve(__dirname, '../../.env') });

const app = express();
const PORT = process.env.VITE_SERVER_PORT || 8000;

// Enable CORS to by-pass the CORS error
app.use(cors());

app.use(bodyParser.json());

app.post('/github/callback', async (req: Request, res: Response) => {
  const code = req.body.code;
  try {
    const response = await axios.post('https://github.com/login/oauth/access_token', {
      client_id: process.env.VITE_GITHUB_CLIENT_ID,
      client_secret: process.env.VITE_GITHUB_CLIENT_SECRET,
      redirect_uri: 'http://localhost:5173/callback',
      code: code,
    });
    const accessToken = new URLSearchParams(response.data).get('access_token');
    if (!accessToken) {
      throw new Error('Access token not found');
    }
    res.json({ accessToken });
  } catch (error) {
    console.error('Error exchanging code for access token:', error.message);
    res.status(500).json({ error: 'Failed to exchange code for access token' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

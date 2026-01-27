// index.js
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import weatherRoutes from './routes/weather.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Use weather routes
app.use('/weather', weatherRoutes);

app.listen(PORT, () => {
  console.log(`Weather backend running on http://localhost:${PORT}`);
});

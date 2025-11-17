import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoutes.js';

import menuItemRoutes from './routes/menuItemRoutes.js';
import itemTypeRoutes from './routes/itemTypeRoutes.js';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(helmet());
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.use('/api/menu', menuItemRoutes);
app.use('/api/types', itemTypeRoutes);
app.use('/api/auth',authRoutes);

connectDB();

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
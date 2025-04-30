import express from 'express';
import cors from 'cors';
import { adminRouter } from './Routes/AdminRoute.js';

const app = express();

// CORS setup (Make sure front-end is served on http://localhost:5173)
app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
}));

// Body parser middleware
app.use(express.json());

// Mount your admin login route
app.use('/auth', adminRouter);

// Start server
app.listen(3000, () => {
  console.log('✅ Server is running on http://localhost:3000');
});

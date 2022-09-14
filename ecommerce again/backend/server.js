import path from 'path';
import express from 'express';
import mongoose from 'mongoose';
import productRoutes from './routes/productRoutes.js';
import userRoutes from './routes/userRoutes.js';
import uploadRoutes from './routes/uploadRoutes.js';
const app = express();
app.use(express.json());
const __dirname = path.resolve();
// app.get("/", (req, res) => {
//   app.use(express.static(path.join(__dirname, "/frontend/build")));
//   res.sendFile(path.resolve(__dirname, "backend", "index.html"));
// });
app.get('/', (req, res) => {
  res.json('api is running');
});
app.use('/uploads', express.static(path.join(__dirname, '/uploads')));
app.use('/products', productRoutes);
app.use('/users', userRoutes);
app.use('/upload', uploadRoutes);
app.listen(5000, async () => {
  console.log('started');
  const a = await mongoose.connect(
    'mongodb+srv://1234567890:1234567890@cluster0.erlyh.mongodb.net/ecommerceAgain?retryWrites=true&w=majority'
  );
});

import express from "express";
import dotenv from "dotenv";
dotenv.config();
import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js';
import userRoutes from './routes/userRoute.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
const port = process.env.PORT || 3000;

connectDB(); // Connect to MongoDB

const app = express();

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.get('/', (req, res) => {
    res.send('API is running...');
})

app.use('/api/products', productRoutes)
app.use('/api/users', userRoutes)

app.use(notFound);
app.use(errorHandler);

 



app.listen(port, () => console.log(`Server running on port ${port}`))
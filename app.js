import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/mongodb.js';
import uploadOnCloudinary from './config/cloudinary.js'
import productRouter from './routes/productRoute.js'
import orderRouter from './routes/orderRoute.js'
import cartRouter from './routes/cartRoute.js';
import userRouter from './routes/userRoute.js';
import adminRouter from "./routes/adminRoute.js";

// App Config
const app = express();
const port = process.env.PORT || 4000;


// Connect to Database
connectDB().then(() => {
    console.log("✅ Database connection successful");
}).catch((err) => {
    console.error("❌ Database connection failed:", err);
    process.exit(1); // Exit process if DB connection fails
});

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: '*', // Allow all origins, update as needed
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}));

// API Endpoints
app.use('/api/user', userRouter);
app.use('/api/admin', adminRouter);
app.use('/api/product',productRouter)
app.use('/api/order',orderRouter)
app.use('/api/cart',cartRouter)

// Root Route
app.get('/', (req, res) => {
    res.send("✅ API Working for React Native App");
});

// Start Server
app.listen(port, () => console.log(`🚀 Server started on port: ${port}`));

// import packages
import { configDotenv } from "dotenv";
import express, { json } from "express";
import cookieParser from "cookie-parser";

//import files
import authRoutes from "../backend/routes/authRoutes.js";
import messageRoutes from "../backend/routes/messageRoutes.js";
import userRoutes from "../backend/routes/userRoutes.js";
import connectDB from "./db/db.js";

const app = express();
const PORT = process.env.PORT || 3000;

configDotenv();

// middlewares

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

// app.get('/', (req, res) => {
//     res.send('Hello World!');
// });

app.listen(PORT, () => {
  connectDB();
  console.log(`Server running on port port` + PORT);
});

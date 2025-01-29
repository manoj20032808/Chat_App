// import packages
import { configDotenv } from "dotenv";
import path from "path";
import express from "express";
import cookieParser from "cookie-parser";

//import files
import authRoutes from "../backend/routes/authRoutes.js";
import messageRoutes from "../backend/routes/messageRoutes.js";
import userRoutes from "../backend/routes/userRoutes.js";
import connectDB from "./db/db.js";

import { app, server } from "./socket/socket.js";

//dotenv.config();
configDotenv()
const __dirname = path.resolve();
const PORT = process.env.PORT || 5000;


app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

app.use(express.static(path.join(__dirname, "/frontend/dist")));

app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});

server.listen(PORT, () => {
	connectDB();
	console.log(`Server Running on port ${PORT}`);
});
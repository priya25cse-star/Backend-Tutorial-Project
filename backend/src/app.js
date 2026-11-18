
import express from "express";
import cors from "cors";
import postRoutes from "./routes/post.routes.js";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Test route
app.get("/", (req, res) => {
    res.send("Backend Server is Running Successfully!");
});

// Post Routes
app.use("/api/posts", postRoutes);

export default app;

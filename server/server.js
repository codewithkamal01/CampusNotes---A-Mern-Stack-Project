import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoutes from "./routes/authRoutes.js";
import noteRoutes from "./routes/noteRoutes.js";
import userRoutes from "./routes/userRoutes.js";

dotenv.config();

const requiredEnvs = ["MONGO_URI", "JWT_SECRET"];
for (const envName of requiredEnvs) {
  if (!process.env[envName]) {
    console.error(`Missing required environment variable: ${envName}`);
    process.exit(1);
  }
}

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/uploads", express.static("uploads"));
app.use("/api/auth", authRoutes);
app.use("/api/notes", noteRoutes);
app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
  res.send("API RUNNING...");
});

const PORT = process.env.PORT || 5000;
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Mongodb connected"))
  .catch((err) => console.log(err));

app.listen(PORT, () => {
  console.log(`server running on ${PORT}`);
});

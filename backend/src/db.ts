import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config({ path: "../.env" });

const mongo_url = process.env.MONGO_URI as string;

const connectDB = async () => {
  try {
    await mongoose.connect(mongo_url);
    console.log("✅ MongoDB connected");
  } catch (err) {
    console.error("❌ MongoDB connection error:", err);
    process.exit(1);
  }
};

export default connectDB;

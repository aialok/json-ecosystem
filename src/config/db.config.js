import mongoose from "mongoose";

const MONGODB_URI =
  "mongodb://localhost:27017/json-schema" || process.env.MONGODB_URI;

const dbConnect = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error}`);
  }
};

export default dbConnect;
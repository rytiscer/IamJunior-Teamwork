import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT ?? 5000;
const DBNAME = process.env.DBNAME;

const connectToDb = async () => {
  try {
    const url = process.env.MONGO_URI;
    const DBNAME = process.env.DBNAME;
    if (url === undefined) return;
    await mongoose.connect(url, { dbName: DBNAME });
    console.log("Connected to MongoDB with Mongoose");
  } catch (err) {
    console.error("Could not connect to the database", err);
    process.exit(1);
  }
};

export { connectToDb, PORT };

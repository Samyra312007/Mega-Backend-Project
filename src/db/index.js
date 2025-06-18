import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { DB_NAME } from "../constants.js";

dotenv.config();

const connectToDatabase = async () => {
  try {
    await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}?retryWrites=true&w=majority`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log('✅ Connected to MongoDB!');
  } catch (err) {
    console.error('❌ MongoDB connection error:', err.message);
  }
};

export default connectToDatabase;

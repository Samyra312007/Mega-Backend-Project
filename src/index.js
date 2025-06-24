import dotenv from "dotenv";
dotenv.config();
import { app } from "./app.js";
import connectToDatabase from "./db/index.js";

const port = process.env.PORT || 8000;

connectToDatabase()
  .then(() => {
    app.listen(port, () => {
      console.log(`✅ Server running at http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.error("❌ MongoDB connection failed:", err);
  });

import express from "express";
import connectToDatabase from "./db/index.js";

const app = express();
const port = process.env.PORT || 8000;

connectToDatabase();

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

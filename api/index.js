import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("database is connected");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();

app.get("/", (req, res) => {
  res.send("Hello everyone");
});
app.listen(3000, () => {
  console.log("Server is running on port 3000!!");
});

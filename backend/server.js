const dotenv = require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const taskRoutes = require("./routes/route.js");
const cors = require("cors");

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: ["*"],
  })
);

app.use("/api/tasks", taskRoutes);

const PORT = 5000;

mongoose
  .connect(
    "mongodb+srv://david:lozinka123@cluster0.wcb3q.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => console.log(error));

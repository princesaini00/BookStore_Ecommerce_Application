import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";
import contactformRoute from "./route/contactform.route.js";
import subscribeRoute from "./route/subscribe.route.js";

const app = express();

app.use(cors());
app.use(express.json());

dotenv.config();

const PORT = process.env.PORT || 4000;

// connect to mongoDB
try {
  mongoose.connect(process.env.MongoURI);
  console.log("Connected to mongoDB");
} catch (error) {
  console.log("Error: ", error);
}

//defining routes
app.use("/book", bookRoute);
app.use("/user", userRoute);
app.use('/contact', contactformRoute);
app.use("/user", subscribeRoute);


app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

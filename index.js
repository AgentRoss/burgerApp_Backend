import express from "express";
import dotenv from 'dotenv';
import mongoose, { connect } from "mongoose";
import cors from 'cors';
import burgerRoute from "./Route/burger.route.js"
import userRoute from "./Route/user.route.js"

const app = express()
app.use(cors());
app.use(express.json())



dotenv.config();

const PORT = process.env.PORT || 4000;
const URL = process.env.MongodbURL;

// connect to mongoDB
try {
  mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  console.log("connected to mongodb")
} catch (error) {
  console.log("Error in conncetion: ", error)
}

//defining routes
app.use("/api/burger", burgerRoute)

app.use("/api/user", userRoute)


app.listen(process.env.PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})
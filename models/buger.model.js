import mongoose from "mongoose";

const burgerSchema = mongoose.Schema({
  name: String,
  price: Number,
  category: String,
  image: String,
  title: String,
})

const Burger = mongoose.model("Burger", burgerSchema);

export default Burger;
import Burger from "../models/buger.model.js"

export const getBurger = async(req, res) => {
  try {
    const burger = await Burger.find()
    res.status(200).json(burger)
  } catch (error) {
    console.log('Error: ', error)
    res.status(500).json(error);
  }
}
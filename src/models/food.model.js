import { Schema, model } from "mongoose";

const foodSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  label: String,
  price: {
    type: Number,
    default: 0,
    required: true,
  },
  description: String,
});

export default model("Food", foodSchema);

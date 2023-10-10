const mongoose = require("mongoose");

const { Schema } = mongoose;

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  price: {
    type: Number,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  image: {
    type: String,
  },
  category: {
    type: String,
  },
  quantity: {
    type: Number,
  },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;

const mongoose = require("mongoose");

const addBuyingSchema = new mongoose.Schema({
  item: String,
  checked: Boolean,
  userId: String,
  index: Number,
});
const buyingCollection = mongoose.model("buyingCollection", addBuyingSchema);
module.exports = { buyingCollection };

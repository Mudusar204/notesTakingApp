const { buyingCollection } = require("../models/postModel");

const addBuying = async (req, res) => {
  try {
    console.log(req.body, "req ma data aya");
    const buying = new buyingCollection({
      item: req.body.item,
      checked: req.body.checked,
      userId: req.body.userId,
      index: req.body.index,
    });
    if (req.body.item !== undefined) {
      await buying.save();
      res.status(200).json({
        message: "success",
      });
    } else {
      res.status(300).json({
        message: "item is required",
      });
    }
  } catch (e) {
    res.status(200).json({
      message: "error",
      error: e,
    });
  }
};
const getBuying = async (req, res) => {
  try {
    const buyingItems = await buyingCollection.find();
    console.log(buyingItems, "item from db");
    res.status(200).json({
      items: buyingItems,
      message: "success",
    });
  } catch (e) {
    res.status(501).json({
      message: "error",
      resposne: e,
    });
  }
};
const updateBuying = async (req, res) => {
  try {
    const buyingItems = await buyingCollection.updateOne(
      {
        index: req.body.index,
      },
      { $set: { checked: true } }
    );
    console.log(buyingItems, "item from db");
    res.status(200).json({
      items: buyingItems,
      message: "success",
    });
  } catch (e) {
    console.log(e);
  }
};
module.exports = { addBuying, updateBuying, getBuying };

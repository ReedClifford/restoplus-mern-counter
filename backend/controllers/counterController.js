const Counter = require("../models/counterModel");
const mongoose = require("mongoose");

//get Counter
const getCounter = async (req, res) => {
  const counter = await Counter.find({});
  res.status(200).json(counter);
};

//create Counter
const createCounter = async (req, res) => {
  const { currentCount } = req.body;
  try {
    const counter = await Counter.create({ currentCount });
    res.status(200).json(counter);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//increment
const incrementCounter = async (req, res) => {
  const { id } = req.params;
  console.log(id);

  const counter = await Counter.findOneAndUpdate(
    { _id: id },
    {
      $inc: {
        currentCount: 1,
      },
    }
  );

  res.status(200).json(counter);
};
//decrement
const decrementCounter = async (req, res) => {
  const { id } = req.params;

  const counter = await Counter.findOneAndUpdate(
    { _id: id },
    {
      $inc: {
        currentCount: -1,
      },
    }
  );

  res.status(200).json(counter);
};

//reset
const resetCounter = async (req, res) => {
  const { id } = req.params;

  const counter = await Counter.findOneAndUpdate(
    { _id: id },
    { currentCount: 0 }
  );

  res.status(200).json(counter);
};

module.exports = {
  createCounter,
  getCounter,
  incrementCounter,
  decrementCounter,
  resetCounter,
};

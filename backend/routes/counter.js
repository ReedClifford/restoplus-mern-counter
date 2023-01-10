const express = require("express");
const {
  createCounter,
  getCounter,
  incrementCounter,
  decrementCounter,
  resetCounter,
} = require("../controllers/counterController");
const router = express.Router();

//GET COUNTER
router.get("/", getCounter);

//POST A NEW COUNTER
router.post("/", createCounter);

//INCREMENT COUNTER
router.patch("/increment/:id", incrementCounter);

//DECREMENT COUNTER
router.patch("/decrement/:id", decrementCounter);
//DECREMENT COUNTER
router.patch("/reset/:id", resetCounter);

module.exports = router;

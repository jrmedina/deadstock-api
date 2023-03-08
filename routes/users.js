const express = require("express");
const router = express.Router();
const user = require("../models/user");

// GET ALL
router.get("/", async (req, res) => {
  try {
    const users = await user.find();
    res.json(users)
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
// GET ONE
router.get("/:id", (req, res) => {
  res.send(req.params.id);
});
// CREATING ONE
router.post("/", (req, res) => {});
// UPDATING ONE
router.patch("/:id", (req, res) => {});

// DELETE ONE

router.delete("/:id", (req, res) => {});

module.exports = router;

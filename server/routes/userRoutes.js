const express = require("express");
const auth = require("../middleware/authMiddleware");
const upload = require("../middleware/upload");
const User = require("../models/User");

const router = express.Router();

router.get("/me", auth, async (req, res) => {
  const user = await User.findById(req.user.id).select("-password");
  res.json(user);
});

router.put("/update", auth, upload.single("profileImage"), async (req, res) => {
  const user = await User.findByIdAndUpdate(
    req.user.id,
    { profileImage: `/uploads/${req.file.filename}` },
    { new: true }
  );
  res.json(user);
});

module.exports = router;

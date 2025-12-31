const express = require("express");
const router = express.Router();
const upload = require("../middleware/upload");
const authMiddleware = require("../middleware/authMiddleware");
const Image = require("../models/Image");

router.post(
  "/upload",
  authMiddleware,
  upload.single("image"),
  async (req, res) => {
    const image = await Image.create({
      imageUrl: `/uploads/${req.file.filename}`,
      uploadedBy: req.user.id,
    });
    res.json(image);
  }
);

router.get("/", authMiddleware, async (req, res) => {
  const images = await Image.find({ uploadedBy: req.user.id });
  res.json(images);
});

router.delete("/:id", authMiddleware, async (req, res) => {
  await Image.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
});

module.exports = router;

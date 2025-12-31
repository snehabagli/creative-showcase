const Image = require("../models/Image");

exports.uploadImage = async (req, res) => {
  try {
    const image = await Image.create({
      imageUrl: `/uploads/${req.file.filename}`,
      user: req.user.id,
    });

    res.status(201).json(image);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getImages = async (req, res) => {
  const images = await Image.find({ user: req.user.id });
  res.json(images);
};

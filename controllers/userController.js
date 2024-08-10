// controllers/userController.js
const User = require('../models/user');

exports.getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    if (!user) return res.status(404).send({ message: 'User not found' });
    res.status(200).send({ user });
  } catch (error) {
    res.status(500).send({ message: 'Server error', error });
  }
};

exports.updateUserProfile = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.userId, req.body, { new: true });
    if (!user) return res.status(404).send({ message: 'User not found' });
    res.status(200).send({ user });
  } catch (error) {
    res.status(500).send({ message: 'Server error', error });
  }
};

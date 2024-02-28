const { getAllUsersService } = require("../services/user-services")

const getAllUser = async (req, res) => {
  try {
    const users = await getAllUsersService();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

module.exports = {
  getAllUser,
  }
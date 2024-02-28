const UserModel  = require("../db/models")

const getAllUsersService = async () => {
 try {
  const getUser = await UserModel.findAll()
  return getUser
 } catch (error) {
  throw new Error(error.message)
 }
}

module.exports = {
  getAllUsersService,
}
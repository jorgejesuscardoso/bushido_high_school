const { Users }  = require("../db/models");
const { validateLogin, validateFormatEmail } = require('../utils/validates');
const { GetDataByIdService } = require("./userDataService")

// Obtem todos os usuários cadastrados.
// Não é necessário passar parâmetros para essa função.


// Essa função retorna um array com todos os usuários cadastrados.

const loginService = async (email, password) => {
  try {
    const isValidEmail = validateFormatEmail(email);
    if (!isValidEmail.isValid) {
      return { message: 'O "email" fornecido é inválido' }
    }
    const getToken = await validateLogin(email, password);

    if (getToken.error || getToken.message) {
      return getToken;
    }

    if (getToken) {
      const userInfo = await Users.findOne({ where: { email } });

      if (userInfo.dataValues) {
        const { password, ...user } = userInfo.dataValues;
        return {
          ...user,
          token: getToken
        }
      }
    }
  } catch (error) {
    throw new Error(error.message)
  }
};

const createUserService = async (data) => {
  try {
    const user = await Users.create(data)
    if (!user) {
      return {message: "Houve um erro ao cadastrar o usuário.", status: 400 }
    }
    return {
      ...user,
      status: 201    
    };
  } catch (error) {
    throw new Error(error.message)
  }
}

const getAllUserService = async (data) => {
  try {
    if (data === 'true') {
      const allUsers = await Users.findAll()
      const users = []
      for (let i = 0; i < allUsers.length; i++) {
        const userData = await GetDataByIdService(allUsers[i].id, null)
        users.push({
          ...allUsers[i].dataValues,
          data: userData
        })
      }
      return users
    }
    const getUser = await Users.findAll()
    if (!getUser) {
     throw new Error("Houve um erro ao buscar os usuários cadastrados ou não há usuários cadastrados.")
    }
    return getUser;
   } catch (error) {
    throw new Error(error.message)
   }
  }

const getUserByIdService = async (userId, data) => {
  try {
    let userData;
    if (data === 'true')  {
      const getUserData = await GetDataByIdService(userId, null)
      userData = getUserData
    }
    const user = await Users.findByPk(userId)
    if (!user) {
      throw new Error("Usuário não encontrado.")
    }
    if (userData) {
      return {
        ...user.dataValues,
        data: userData
      }
    }
    return user
  } catch (error) {
    throw new Error(error.message)
  }
}

module.exports = {
  createUserService,
  getAllUserService,
  getUserByIdService,
  loginService
}
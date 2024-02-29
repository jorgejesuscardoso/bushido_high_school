const { Users }  = require("../db/models")
const { GetDataByIdService } = require("./userDataService")

// Obtem todos os usuários cadastrados.
// Não é necessário passar parâmetros para essa função.

// Essa função retorna um array com todos os usuários cadastrados.

const getAllUserService = async () => {
  try {
    const getUser = await Users.findAll()
    if (!getUser) {
     throw new Error("Error while fetching user data")
    }
    return getUser;
   } catch (error) {
    throw new Error(error.message)
   }
  }

// Obtem todos os usuários cadastrados e seus dados pessoais. É retornado um array de objetos com todos os usuários e seus dados pessoais.

const getAllUserWithDataService = async () => {
 try {
  // Usa o método findAll do sequelize para obter todos os usuários cadastrados.
  const getUser = await Users.findAll()
  // Se não houver usuários cadastrados, retorna um erro.
  if (!getUser) {
   throw new Error("Error while fetching user data")
  }
  // Se houver usuários cadastrados, obtem os dados pessoais de cada usuário.
  if (getUser) {
    // Usa o método map para obter o id de cada usuário.
    const usersId = getUser.map(user => user.id)
    // Como é uma chama assíncrona, usa o método Promise.all para obter os dados de cada usuário. Sem o Promise.all, a função retornaria um array de Promises.
    const usersData = await Promise.all(usersId.map(id => GetDataByIdService(id)))
   
    // Usa o método map para criar um novo array com os usuários e seus dados pessoais respectivos.
    const usersWithData = getUser.map((user, index) => {
      return {
        // Usa o spread operator para persistir as propriedades do objeto user enquanto adiciona a propriedade data com os dados pessoais do usuário.
        ...user.dataValues,
        data: usersData[index]
      }
    });
    // Retorna o array com os usuários e seus dados pessoais.
    return usersWithData
  }
 } catch (error) {
  // Se houver um erro, retorna uma mensagem de erro.
  throw new Error(error.message)
 }
}

module.exports = {
  getAllUserService,
  getAllUserWithDataService
}
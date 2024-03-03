const { getAllUserService, getUserByIdService, createUserService } = require("../services/userServices")

// Obtem todos os usuários cadastrados. Não é necessário passar nenhum parâmetro.

const createUser = async (req, res) => {
  const data = req.body;
  try {
    // Chama a função camada service que cria um novo usuário.
    const user = await createUserService(data);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

const getAllUser = async (req, res) => {
  try {
    const { data } = req.query;
    // Chama a função camada service que obtem todos os usuários cadastrados.
    const users = await getAllUserService(data);
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

const GetUserByID = async (req, res) => {
  const { id } = req.params;
  const { data } = req.query;
  try {
    const user = await getUserByIdService(id, data);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = {
  createUser,
  getAllUser,
  GetUserByID
}
const { getAllUserWithDataService, getAllUserService } = require("../services/userServices")

// Obtem todos os usuários cadastrados. Não é necessário passar nenhum parâmetro. Essa função tem uma middleware de autenticação e não permite que usuários não autenticados acessem os dados pessoais de todos os usuários.

// É feita uma verificação de autenticação e autorização para que apenas usuários autenticados(possuem um token válido) e com role de administrador possam acessar as informações de todos os usuários.

const getAllUser = async (req, res) => {
  try {
    // Chama a função camada service que obtem todos os usuários cadastrados.
    const users = await getAllUserService();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// Obtem todos os usuários cadastrados e seus dados pessoais. Não é necessário passar nenhum parâmetro. 

const getAllUserWithData = async (req, res) => {
  try {
    // Chama a função camada service que obtem todos os usuários cadastrados e seus dados pessoais.
    const users = await getAllUserWithDataService();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

module.exports = {
  getAllUser,
  getAllUserWithData
  }
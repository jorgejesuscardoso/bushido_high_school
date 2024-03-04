const { getAllUserService, getUserByIdService, createUserService, loginService } = require("../services/userServices")

// Obtem todos os usuários cadastrados. Não é necessário passar nenhum parâmetro.

const Login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await loginService(email, password);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

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

    // Se a chamada por por users + seus dados pessoais, não precisa pegar o objeto dataValues. Se tentar pegar, vai dar erro.
    if (users.find((s) => s.data)) {
      const withoutPassword = users.map((user) => {
        return { ...user, password: undefined }
      });
  
      res.status(200).json(withoutPassword);
    }

    // Se a chamada  não incluir os dados pessoais, precisa pegar o objeto dataValues. Então, remove a senha sem erro.
    const withoutPassword = users.map((user) => {
      return { ...user.dataValues, password: undefined }
    });

    return res.status(200).json(withoutPassword);
    
    
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

const GetUserByID = async (req, res) => {
  const { id } = req.params;
  const { data } = req.query;
  try {
    const user = await getUserByIdService(id, data);
    const withoutPassword = { ...user.dataValues, password: undefined };
    res.status(200).json(withoutPassword);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = {
  createUser,
  getAllUser,
  GetUserByID,
  Login
}
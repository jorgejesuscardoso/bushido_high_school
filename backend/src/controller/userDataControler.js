const { GetDataByIdService, GetAllDataService, createNewUserDataService } = require("../services/userDataService");

// Essa função envia dois parâmetros para a camada service: null e id, ambos devem ser 'numbers'. O primeiro parâmetro é null porque o primeiro parâmetro da função 'GetDataByIdService' recebe um 'user_id', que é o 'id' do usuário que está autenticado. Como a função 'getDataById', NESTA CHAMADA, é para obter os dados específico na tabela, o 'id' do usuário que está autenticado não é necessário. Utiliza apenas o segundo parâmetro que é o 'id' dos dados na tabela 'User_Data'.

// Nas middlewares, ValidateUserInput e ValidateToken,  é feita uma verificação de autenticação e autorização para que apenas usuários autenticados e com role de administrador possam acessar as informações de todos os usuários.

const createNewUserData = async (req, res) => {
  try {
    const data = req.body;

    // Chama a função camada service que cria um novo dado pessoal.
    const newData = await createNewUserDataService(data);
    res.status(201).json(newData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

const getAllData = async (req, res) => {
  try {
    // Chama a função camada service que obtem todos os dados pessoais cadastrados.
    const data = await GetAllDataService();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

const getDataById = async (req, res) => {
  try {
    const { id } = req.params;

    // Chama a função camada service que obtem os dados pessoais de um usuário cadastrado.
    const data = await GetDataByIdService(null, id);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = {
  createNewUserData,
  getAllData,
  getDataById
};

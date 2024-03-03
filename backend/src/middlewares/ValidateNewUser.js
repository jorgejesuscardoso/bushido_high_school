const { Roles, Users } = require('../db/models');

const validUserName = (username) => {
  if (!username || username.length < 3) {
    return { message: 'O campo "username" é obrigatório e deve ter no minimo 3 caracteres' };
  }
  return true;
}

const validEmail = async (email) => {
  const emailRegex = /\S+@\S+\.\S+/;
  const user = await Users.findOne({ where: { email } });

  console.log(user);

  if (!email || !emailRegex.test(email)) {
    return { message: 'O campo "email" é obrigatório e deve ser no formato: "test@test.com"' };
  }

  if (user) {
    return { message: 'O email já está cadastrado!' };
  }

  return true;
}

const validPassword = (password) => {
  const passwordRegex = /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}/;

  if (!password || !passwordRegex.test(password)) {
   return { message: 'O campo "password" é obrigatório e deve ter no minimo 6 caracteres!' };
  }
  return true;
}

const validRole = async (role_id) => {
  const role = await Roles.findByPk(role_id);
  if (!role) {
    return { message: 'O "role_id" fornecido é inválido' };
  }

  if (role.dataValues.name === 'admin') {
    return { message: 'Não é possivel cadastrar um novo usuário com essa "role_id"' };
  }

  if (!role_id) {
   return { message: 'O campo "role_id" é obrigatório' };
  }
  return true;
}

const ValidateNewUser = async (req, res, next) => {
  const { username, email, password, role_id } = req.body;
  const isValidUserName =  validUserName(username);
  const isValidEmail = await validEmail(email);
  const isValidPassword =  validPassword(password);
  const isValidRole = await validRole(role_id);

  if (isValidUserName !== true) {
    return res.status(400).json({ message:  isValidUserName.message });
  };

  if (isValidPassword !== true) {
    return res.status(400).json({ message:  isValidPassword.message });
  };

  if (isValidEmail !== true) {
    return res.status(400).json({ message:  isValidEmail.message });
  };

  if (isValidRole !== true) {
    return res.status(400).json({ message:  isValidRole.message });
  };
  next();
}

module.exports = {
  ValidateNewUser,
  validUserName,
  validEmail,
  validPassword
};
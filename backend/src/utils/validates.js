const { Roles, Users, User_Data } = require('../db/models');

const validUserName = (username) => {
  if (!username || username.length < 3) {
    return { message: 'O campo "username" é obrigatório e deve ter no minimo 3 caracteres' };
  }
  return true;
}

const validateFullName = (fullName) => {
  if (!fullName || fullName.length < 6) {
    return { message: 'O campo "name" é obrigatório e deve ter no minimo 6 caracteres' };
  }
  return true;
}

const validEmail = async (email) => {
  const emailRegex = /\S+@\S+\.\S+/;

  if (!email || !emailRegex.test(email)) {
    return { message: 'O campo "email" é obrigatório e deve ser no formato: "test@test.com"' };
  }

  const user = await Users.findOne({ where: { email } });

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

  if (role.dataValues.name === 'admin' || role.dataValues.name === 'manager') {
    return { message: 'Não é possivel cadastrar um novo usuário com essa "role_id"' };
  }

  if (!role_id) {
   return { message: 'O campo "role_id" é obrigatório' };
  }
  return true;
}

const validUserId = async (user_id) => {
  const user = await Users.findByPk(user_id);

  if (!user_id) {
    return { message: 'O campo "user_id" é obrigatório' };
  }
  if (!user) {
    return { message: 'O "user_id" fornecido é inválido' };
  }
  return true;
}

const validateMatriculation = async (matriculation) => {
  const matriculationRegex = /[a-zA-Z]+\d+[a-zA-Z]-\d+[a-zA-Z]+\d+-[a-zA-Z]+\d+[a-zA-Z]-\d+[a-zA-Z]+\d+/;

  if (!matriculation || matriculation.length < 2) {
    return { message: 'O campo "matriculation" é obrigatório!' };
  }
  if (!matriculationRegex.test(matriculation)) {
    return { message: 'O campo "matriculation" fornecido é inválido"' };
  }

  const hasMatriculation = await User_Data.findOne({ where: { matriculation } });

  if (hasMatriculation) {
    return { message: 'Esta matrícula já está cadastrada!' };
  }
  return true;
}

const validateBirthday = (birthday) => {
  if (!birthday) {
    return { message: 'O campo "birthday" é obrigatório' };
  }
  return true;
}

const validateAddress = (address) => {
  if (!address) {
    return { message: 'O campo "address" é obrigatório' };
  }
  return true;
}

const validatePhone = (phone) => {
  const phoneRegex = /\d{2}-\d{1}-\d{4}-\d{4}/;
  if (!phone || !phoneRegex.test(phone)) {
    return { message: 'O campo "phone" fornecido é inválido' };
  }
  return true;
}

const validateCPF = (cpf) => {
  const cpfRegex = /\d{3}\.\d{3}\.\d{3}-\d{2}/;
  if (!cpf || !cpfRegex.test(cpf)) {
    return { message: 'O campo "cpf" fornecido é inválido' };
  }
  return true;
}

const validateRG = (rg) => {
  const rgRegex = /\d{2}\.\d{3}\.\d{3}-\d/;
  if (!rg || !rgRegex.test(rg)) {
    return { message: 'O campo "rg" fornecido é inválido' };
  }
  return true;
}

const validateNewDatas = async (user_id) => {
  const user = await User_Data.findOne({ where: { user_id } });
  if (user) {
    return { message: 'Usuário já possue dados pessoais cadastrado!' };
  }
  return true;
}

module.exports = {
  validUserName,
  validEmail,
  validPassword,
  validRole,
  validUserId,
  validateFullName,
  validateMatriculation,
  validateBirthday,
  validateAddress,
  validatePhone,
  validateCPF,
  validateRG,
  validateNewDatas
};
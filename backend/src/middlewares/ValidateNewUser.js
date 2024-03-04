const { validUserName, validCreateEmail, validPassword, validRole } = require('../utils/validates');

const ValidateNewUser = async (req, res, next) => {
  const { username, email, password, role_id } = req.body;
  const isValidUserName =  validUserName(username);
  const isValidEmail = await validCreateEmail(email);
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
};
const { validUserName, validCreateEmail, validPassword, validRole } = require('../utils/validates');

const ValidateNewUser = async (req, res, next) => {
  const { username, email, password, role_id } = req.body;
  const isValidUserName =  validUserName(username);
  const isValidEmail = await validCreateEmail(email);
  const isValidPassword =  validPassword(password);
  const isValidRole = await validRole(role_id);

  if (isValidUserName !== true) {
    return res.status(400).json({ message:  isValidUserName.message, status: isValidUserName.status});
  };

  if (isValidEmail !== true) {
    return res.status(400).json({ message:  isValidEmail.message, status: isValidEmail.status});
  };
  
  if (isValidPassword !== true) {
    return res.status(400).json({ message:  isValidPassword.message, status: isValidPassword.status});
  };


  if (isValidRole !== true) {
    return res.status(400).json({ message:  isValidRole.message, status: isValidRole.status});
  };
  next();
}

module.exports = {
  ValidateNewUser,
};
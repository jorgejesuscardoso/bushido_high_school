const { validCreateEmail, validUserId, validateFullName, validateMatriculation, validateBirthday, validateAddress, validatePhone, validateRG, validateCPF, validateNewDatas } = require('../utils/validates');



const validateNewData = async (req, res, next) => {
  const { name, email, user_id, matriculation, birthday, phone, address, RG, CPF} = req.body;
  const isValidEmail = await validCreateEmail(email);
  const isValidUserId = await validUserId(user_id);
  const isValidName = validateFullName(name);
  const isValidMatriculation = await validateMatriculation(matriculation);
  const isValidBirthday = validateBirthday(birthday);
  const isValidAddress = validateAddress(address);
  const isValidPhone = validatePhone(phone);
  const isValidRG = validateRG(RG);
  const isValidCPF = validateCPF(CPF);
  const hasData = await validateNewDatas(user_id);

  if (isValidName.message) return res.status(400).json({ message: isValidName.message });

  if (isValidEmail.message) return res.status(400).json({ message: isValidEmail.message });

  if (isValidUserId.message) return res.status(400).json({ message: isValidUserId.message });

  if (isValidMatriculation.message) return res.status(400).json({ message: isValidMatriculation.message });

  if (isValidBirthday.message) return res.status(400).json({ message: isValidBirthday.message });

  if (isValidAddress.message) return res.status(400).json({ message: isValidAddress.message });

  if (isValidPhone.message) return res.status(400).json({ message: isValidPhone.message });

  if (isValidRG.message) return res.status(400).json({ message: isValidRG.message });

  if (isValidCPF.message) return res.status(400).json({ message: isValidCPF.message });

  if (hasData.message) return res.status(400).json({ message: hasData.message });

  next();
}

module.exports = {
  validateNewData,
}
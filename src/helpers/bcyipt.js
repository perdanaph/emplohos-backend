const bcrypt = require('bcrypt');

const hashPassword = async (password) => {
  const saltRounds = 10;
  return await bcrypt.hash(password, saltRounds);
};

const comparePasswrod = async (password, hashing) => {
  return await bcrypt.compare(password, hashing);
};

module.exports = {
  comparePasswrod,
  hashPassword,
};

const Joi = require('joi');
const { GENDER, MARITAL_STATUS } = require('../../utils/constans');

const createEmployeeSchema = Joi.object({
  name: Joi.string().required(),
  nik: Joi.string().required(),
  gender: Joi.string()
    .valid(...Object.values(GENDER))
    .required(),
  birthPlace: Joi.string().required(),
  birthDate: Joi.date().required(),
  phoneNumber: Joi.string().required(),
  province: Joi.string().required(),
  city: Joi.string().required(),
  district: Joi.string().required(),
  village: Joi.string().required(),
  addressDetail: Joi.string().required(),
  username: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(8).required(),
  position: Joi.string().required(),
  contractStartDate: Joi.date().required(),
  contractEndDate: Joi.date().required().greater(Joi.ref('contractStartDate')),
  maritalStatus: Joi.string()
    .valid(...Object.values(MARITAL_STATUS))
    .required(),
  bpjsCode: Joi.string().allow('').optional(),
});

module.exports = {
  createEmployeeSchema,
};

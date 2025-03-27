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

const updateEmployeeSchema = Joi.object({
  name: Joi.string(),
  nik: Joi.string(),
  gender: Joi.string().valid(...Object.values(GENDER)),
  birthPlace: Joi.string(),
  birthDate: Joi.date(),
  phoneNumber: Joi.string(),
  province: Joi.string(),
  city: Joi.string(),
  district: Joi.string(),
  village: Joi.string(),
  addressDetail: Joi.string(),
  username: Joi.string(),
  email: Joi.string().email(),
  password: Joi.string().min(6),
  position: Joi.string(),
  contractStartDate: Joi.date(),
  contractEndDate: Joi.date().when('contractStartDate', {
    is: Joi.exist(),
    then: Joi.date().greater(Joi.ref('contractStartDate')),
    otherwise: Joi.date(),
  }),
  maritalStatus: Joi.string().valid(...Object.values(MARITAL_STATUS)),
  bpjsCode: Joi.string().allow(''),
}).min(1);

module.exports = {
  createEmployeeSchema,
  updateEmployeeSchema,
};

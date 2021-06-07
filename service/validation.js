const Joi = require('joi');

const schemaValidateContact = Joi.object({
  name: Joi.string().min(3).max(30),
  email: Joi.string().email(),
  phone: Joi.string(),
  password: Joi.string().min(7).max(15),
  subscription: Joi.string(),
});

const validate = (schema, obj, next) => {
  const { error } = schema.validate(obj);
  if (error) {
    return next({
      status: 400,
      message: 'Bad request',
    });
  }
  next();
};

module.exports.validateContact = (req, _res, next) => {
  return validate(schemaValidateContact, req.body, next);
};
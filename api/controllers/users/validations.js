const Joi = require('joi');

exports.registerValidation = (data) => {
  const schema = Joi.object({
    name: Joi.string().alphanum().min(3).required(),
    email: Joi.string().min(6).email().required(),
    password: Joi.string()
      .min(6)
      .pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/)
      .required(),
  });

  return schema.validate(data);
};

exports.loginValidation = (data) => {
  const schema = Joi.object({
    email: Joi.string().min(6).email().required(),
    password: Joi.string().min(6).required(),
  });

  return schema.validate(data);
};

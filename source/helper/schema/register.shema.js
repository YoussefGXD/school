import Joi from "joi";
const register = Joi.object({
  name: Joi.string().min(8).max(40).required().messages({
    "string.min": "name must be at least 8 characters",
    "string.max": "name can't be longer than 40 characters",
    "string.empty": "name can't be empty",
    "any.required": "name is required",
  }),
  email: Joi.string().email().required().messages({
    "string.empty": "email can't be empty",
    "string.required": "email is required",
    "string.email": "email is not valid",
  }),
  phoneNumber: Joi.string()
    .pattern(/^01[0125][0-9]{8}$/)
    .required()
    .messages({
      "string.pattern": "phone number is not valid",
      "string.empty": "phone number can't be empty",
      "string.required": "phone number is required",
    }),
  password: Joi.string()
    .pattern(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    )
    .required()
    .messages({
      "string.pattern": "password is not valid",
      "string.empty": "password can't be empty",
      "string.required": "password is required",
    }),
  role: Joi.string().required().valid("student", "teacher").messages({
    "string.empty": "password can't be empty",
    "string.valid": "the role is student or teacher",
    "string.required": "password is required",
  }),
});
export default register;

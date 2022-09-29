import Joi from "joi";
const login = Joi.object({
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
  email: Joi.string().email().required().messages({
    "string.empty": "email can't be empty",
    "string.required": "email is required",
    "string.email": "email is not valid",
  }),
});
export default login;

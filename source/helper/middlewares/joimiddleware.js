import { badResponse } from "../functions/resHandler.js";
export default function joiMiddleware(schema) {
  return async (req, res, next) => {
    try {
      if (!schema) {
        throw new Error("Schema is required");
      }
      const value = await schema.validateAsync(req.body, {
        abortEarly: true,
        allowUnknown: false,
        convert: true,
      });
      req.body = value;
      next();
    } catch (err) {
      if (err.details) {
        const errorMessage = err.details.map((e) => e.message).join(",");
        return badResponse(res, errorMessage);
      }
      next(err);
    }
  };
}

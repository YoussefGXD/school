import Users from "../../helper/db/users.db.js";
import bcyrpt from "bcrypt";
import { badResponse, okResponse } from "../../helper/functions/resHandler.js";
export function userLogin(req, res, next) {
  try {
    const { email, password } = req.body;
    if (
      Users.find(
        (u) => u.email === email && bcyrpt.compareSync(password, u.password)
      )
    ) {
      return okResponse(res, "logged in successfully");
    } else {
      badResponse(res, "invalid eamil or password");
    }
  } catch (err) {
    next(err);
  }
}

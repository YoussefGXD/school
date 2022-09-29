import Users from "../../helper/db/users.db.js";
import bcrypt from "bcrypt";
import { badResponse, okResponse } from "../../helper/functions/resHandler.js";
export function addUser(req, res, next) {
  try {
    const { name, email, password, phoneNumber, role } = req.body;
    const enpassword = bcrypt.hashSync(password, 10);
    if (!Users.find((u) => u.email === email)) {
      return badResponse(res, "This email is used");
    }
    if (Users.find((u) => u.phoneNumber === phoneNumber)) {
      return badResponse(res, "This phone number is used");
    }
    const user = {
      id: Users.length + 1,
      name: name,
      email: email,
      password: enpassword,
      phoneNumber: phoneNumber,
      role: role.tolowercase(),
    };
    Users.push(user);
    okResponse(res, "user added successfully", Users);
  } catch (err) {
    next(err);
  }
}

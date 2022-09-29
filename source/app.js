import express from "express";
import userRouter from "./controllers/user.controllers.js";
const app = express();

app.use("/users", userRouter);

const port = 8080;
app.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
export default app;

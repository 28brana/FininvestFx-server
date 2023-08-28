import { Router } from "express";
import foodRouter from "./food.router.js";

const routes = Router();

routes.use("/food", foodRouter);

export default routes;

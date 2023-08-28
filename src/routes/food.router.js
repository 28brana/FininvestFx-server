import { Router } from "express";
import { createFood, getFoodList, updateFood } from "../controller/food.controller.js";

const foodRouter = Router();

foodRouter.get("/", getFoodList);
foodRouter.post("/create", createFood);
foodRouter.put("/update", updateFood);

export default foodRouter;

import { Router } from "express";
import { createFood, getCategory, getFoodList, updateFood } from "../controller/food.controller.js";

const foodRouter = Router();

foodRouter.get("/", getFoodList);
foodRouter.get("/category", getCategory);
foodRouter.post("/create", createFood);
foodRouter.put("/update", updateFood);

export default foodRouter;

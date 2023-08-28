import { Router } from "express";
import foodRouter from "./food.router.js";

const routes = Router();

routes.use("/food", foodRouter);
routes.get('/',(req,res)=>{
    res.send('Working');
})

export default routes;

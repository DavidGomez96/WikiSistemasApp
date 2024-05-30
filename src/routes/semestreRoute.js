import { Router } from "express";
import SemestreController from "../controllers/semestreController.js";


export const semestreRoute = Router();

semestreRoute.get('/', SemestreController.getAll);

export default semestreRoute;
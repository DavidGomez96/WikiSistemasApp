import { Router } from "express";
import SemestreController from "../controllers/semestreController.js";


export const semestreRouter = Router();

semestreRouter.get('/', SemestreController.getAll);

export default semestreRouter;
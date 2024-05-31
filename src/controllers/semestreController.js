// import Semestre from "../models/semestresModel.js";
import {Semestre} from "../models/index.js";

export class SemestreController {

  static async getAll (req, res) {
    try {
      const semestres = await Semestre.findAll()
      res.json(semestres)
    }catch (error) {
      res.status(400).json({ error: error.message })
    }
  }
}

export default SemestreController;
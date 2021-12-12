import Express from "express";
import { 
    getAll,
    addTask,
    modifyTask
} from "../models/tasks";
import bodyParser from "body-parser";
const router = Express.Router();

router.get("/getAllTasks", getAll);

router.post("/addTask", bodyParser.json(), addTask);

router.put("/modifyTask", bodyParser.json(),modifyTask);

export default router;
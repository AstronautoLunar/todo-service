import Express from "express";
import { 
    getAll,
    addTask,
    modifyTask,
    deleteTask
} from "../models/tasks";
import bodyParser from "body-parser";
const router = Express.Router();

router.get("/getAllTasks", getAll);

router.post("/addTask", bodyParser.json(), addTask);

router.put("/modifyTask", bodyParser.json(),modifyTask);

router.delete("/deleteTask", bodyParser.json(), deleteTask);

export default router;
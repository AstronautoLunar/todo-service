import { 
    SendTaskModifyProps,
    VerifyBodyTaskProps
} from "../@types";
import { data } from "../data"

function createID():string {
    const numberRandom = Math.random() * 10;

    const stringValue = String(numberRandom);

    const stringConverted = stringValue.substring(2, stringValue.length);

    return stringConverted;
}

function sendTask(text: string):void {
    const ID = createID();
    const DATE = new Date().toLocaleDateString();

    data.tasks.push({
        id: ID,
        text,
        date: DATE,
        completed: false
    });
}

function sendTaskModify({ id, text }:SendTaskModifyProps):void {
    const [ dataSelected ] = data.tasks.filter(item => item.id === id);

    const dataModify = ({ ...dataSelected, text});

    const indexLocationObject = data.tasks.findIndex(item => item.id === id);

    data.tasks[indexLocationObject] = dataModify
}

function verifyBodyTask({ id, text, type }:VerifyBodyTaskProps) {
    let isIdNumber:boolean;
    let isIdBoolean:boolean;
    let isTextNumber:boolean;
    let isTextBoolean:boolean;

    if(id) {
        isIdNumber = typeof id === "number";
        isIdBoolean = typeof id === "boolean";
    } else if(text) {
        isTextNumber = typeof text === "number";
        isTextBoolean = typeof text === "boolean";
    } else {
        return -1;
    }

    switch(type) {
        default:
        case "isTodayNumber":
            return isIdNumber || isTextNumber;
        case "isTodayBoolean":
            return isIdBoolean || isTextBoolean;
        case "isIdNumber":
            return isIdNumber;
        case "isIdBoolean":
            return isIdBoolean;
        case "isTextNumber":
            return isTextNumber;
        case "isTextBoolean":
            return isTextBoolean;
    }
}

export const getAll = (request, response) => {
    response.json(JSON.stringify(data));
}

export const addTask = (request, response) => {
    const { text } = request.body;

    const isTextNumber = verifyBodyTask({
        text,
        type: "isTextNumber"
    })

    if(isTextNumber) {
        response.status(400).send("Tarefa invalida");
    } else {
        sendTask(text);
        response.status(200).send("Enviado com sucesso");
    }
}

export const modifyTask = (request, response) => {
    const { id, text } = request.body;

    const isTodayAreNumber = verifyBodyTask({
        id,
        text,
        type: "isTodayNumber"
    });

    const isTextBoolean = verifyBodyTask({
        id,
        text,
        type: "isTodayBoolean"
    });

    if(isTodayAreNumber || isTextBoolean) {
        response.state(400).send("Tipo de valores invalido para alteração");
    } else {
        sendTaskModify({
            id,
            text
        });

        response.status(200).send("Alterado com sucesso");
    }
}

export const deleteTask = (request, response) => {
    const { id } = request.body;

    const isIdNumber = verifyBodyTask({
        id,
        type: "isIdNumber"
    });

    const isIdBoolean = verifyBodyTask({
        id,
        type: "isIdBoolean"
    })

    if(isIdNumber || isIdBoolean) {
        response.status(400).send("Tipo id invalido para remoção de tarefa");
    } else {
        
    }
}
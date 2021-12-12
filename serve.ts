import Express from "express";
import router from "./src/router/api";

const app = Express();
const PORT = 4444;

app.use("/api", router);

app.listen(process.env.PORT || PORT, () => (
    console.log(`O servidor está iniciando na porta ${process.env.PORT || PORT}`)
))
import express,{ Express } from "express";
import cors from "cors";

const app: Express = express();

app.use(cors()); //para habilitar cors
app.use(express.json()); //para parsear json

//localhost:3000/

app.listen(3000, () => {
    console.log("server is running in port 3000")
} )
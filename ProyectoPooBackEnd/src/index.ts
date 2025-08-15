import express,{ Express } from "express";
import cors from "cors";
import { connectarBD } from "./controllers/baseDatos.controller";
import usuariosRouter from "./routers/usuarios.router";

const app: Express = express();

app.use(cors()); //para habilitar cors
app.use(express.json()); //para parsear json

const uri  = "mongodb://localhost:27017/quickcodemaker";

(async () => {
  await connectarBD(uri);
})();

//localhost:3000/
app.use("/codeMaker", usuariosRouter);

app.listen(8000, () => {
    console.log("server is running in port 8000")
} )




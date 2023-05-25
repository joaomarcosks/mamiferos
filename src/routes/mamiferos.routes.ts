
import { create, get,getId } from "../controller/mamifero.controller";

const mamiferoRoutes = (app:any) => {
    app.post("/mamiferos", create)
    app.get("/mamiferos", get);
    app.get("/mamifero/:id", getId)
}

export default mamiferoRoutes;

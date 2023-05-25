
import { create, get } from "../controller/mamifero.controller";

const mamiferoRoutes = (app:any) => {
    app.post("/mamiferos", create)
    app.get("/mamiferos", get);
}

export default mamiferoRoutes;

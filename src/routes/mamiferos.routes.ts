import { create } from "../controller/mamifero.controller";

const mamiferoRoutes = (app:any) => {
    app.post("/mamiferos", create)
}

export default mamiferoRoutes;

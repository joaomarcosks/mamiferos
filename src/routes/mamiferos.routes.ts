
import { create, get,getId, updateId } from "../controller/mamifero.controller";

const mamiferoRoutes = (app:any) => {
    app.post("/post", create)
    app.get("/get", get);
    app.get("/get/:id", getId)
    app.put("/put/:id", updateId  )
}

export default mamiferoRoutes;

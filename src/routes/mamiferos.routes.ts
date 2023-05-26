
import { create, get,getId, updateId, delected } from "../controller/mamifero.controller";

const mamiferoRoutes = (app:any) => {
    app.post("/post", create)
    app.get("/get", get);
    app.get("/getid/:id", getId)
    app.put("/put/:id", updateId)
    app.delete("/delete/:id", delected)
}

export default mamiferoRoutes;

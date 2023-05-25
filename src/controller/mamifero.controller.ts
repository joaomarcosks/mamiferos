import { createMamifero, getAll, getById} from "../repository/mamifero.repository";
import { Request, Response } from "express";


export const create = async(req: Request, res: Response) => {
    try {
        const mamifero = await createMamifero(req.body);
        res.status(200).send(mamifero)
    } catch (error) {
        res.status(400).send(error)
        console.log(error);
    }
}

export const get = async(req: Request, res: Response) =>{
    try {
        const mamifero = await getAll();
        res.status(200), res.send(mamifero)
    } catch (e) {
        res.status(400).send(e)
        console.log(e);
    }

}

export const getId = async(req:Request, res:Response ) => {
    try {
        const mamifero = await getById(Number(req.params.id));
        res.status(200), res.send(mamifero)
    } catch (error) {
        res.status(400).send(error)
        console.log(error);
    }
}
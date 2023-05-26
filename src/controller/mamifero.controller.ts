import { createMamifero, getAll, getById, update, delect} from "../repository/mamifero.repository";
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

export const updateId = async(req: Request, res:Response) => {

    try {
         const mamifero = await update(Number(req.params.id), req.body);
         res.status(200), res.send(mamifero);
    } catch (e) {
        res.status(400), res.send(e);
        console.log(e);
    }
}

export const delected = async (req: Request, res:Response) => {
    try {
        await delect(Number(req.params.id))
        res.status(200), res.send("deletado")
    } catch (error) {
        res.status(400), res.send(error);
        console.log(error);
    }
};
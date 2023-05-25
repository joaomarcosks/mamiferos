import { createMamifero } from "../repository/mamifero.repository";
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
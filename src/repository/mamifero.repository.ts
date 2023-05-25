import { prisma } from "../services/prisma";

export const createMamifero = async(data:any) => {
    const mamifero = await prisma.mamiferos.create({
        data,
    });
    return mamifero;
}
import { prisma } from "../services/prisma";

export const createMamifero = async(data:any) => {
    const mamifero = await prisma.mamiferos.create({
        data,
        select: {
            nome: true,
            descricao:true,
            peso: true,
            extincao: true
        }
    });
    return data;
};

export const getAll = async() => {
    const mamifero = await prisma.mamiferos.findMany({
        select: {
            nome: true,
            descricao:true,
            peso: true,
            extincao: true
        }
    })
    return mamifero;
}
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
    })

    return data;
};

export const getAll = async() => {
    const mamifero = await prisma.mamiferos.findMany({
        select: {
            id: true,
            nome: true,
            descricao:true,
            peso: true,
            extincao: true
        }
    })

    return mamifero;
};

export const getByString = async (data: string) => {
    const mamifero = await prisma.mamiferos.findMany({
      where: {
        OR: [
          { nome: { contains: data } }, 
          { descricao: { contains: data } }, 
        ],
      },
      select: {
        id: true,
        nome: true,
        descricao: true,
        peso: true,
        extincao: true
       
      },
    });

    return mamifero;
  };

export const update = async(id:number, data:any) => {
    const mamifero = await prisma.mamiferos.update({
        where: {
            id
        } ,
        data,
        select: {
            id: true,
            nome: true,
            descricao:true,
            extincao: true,
            peso: true
            
        }
    })

    return  mamifero;
};

export const delect = async(id:any) => {
    await prisma.mamiferos.delete({
        where: {
            id
        }
    })

    return
};
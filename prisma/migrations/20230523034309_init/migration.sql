-- CreateTable
CREATE TABLE "Mamiferos" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "extincao" BOOLEAN NOT NULL DEFAULT true,
    "peso" INTEGER NOT NULL,

    CONSTRAINT "Mamiferos_pkey" PRIMARY KEY ("id")
);

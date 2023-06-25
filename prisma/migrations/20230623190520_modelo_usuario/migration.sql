-- CreateTable
CREATE TABLE "Usuario" (
    "Id" SERIAL NOT NULL,
    "Nombre" VARCHAR(50) NOT NULL,
    "Apellido" VARCHAR(50) NOT NULL,
    "Email" VARCHAR(50) NOT NULL,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("Id")
);

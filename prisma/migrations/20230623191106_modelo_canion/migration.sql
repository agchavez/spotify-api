-- CreateTable
CREATE TABLE "Cancion" (
    "Id" SERIAL NOT NULL,
    "Titulo" VARCHAR(50) NOT NULL,
    "Artista" VARCHAR(50) NOT NULL,
    "Duracion" VARCHAR(50) NOT NULL,
    "UsuarioId" INTEGER NOT NULL,

    CONSTRAINT "Cancion_pkey" PRIMARY KEY ("Id")
);

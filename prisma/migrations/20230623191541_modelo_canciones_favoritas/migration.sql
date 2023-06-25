-- CreateTable
CREATE TABLE "CancionesFavoritas" (
    "Id" SERIAL NOT NULL,
    "IdUsuario" INTEGER NOT NULL,
    "IdCancion" INTEGER NOT NULL,

    CONSTRAINT "CancionesFavoritas_pkey" PRIMARY KEY ("Id")
);

-- AddForeignKey
ALTER TABLE "CancionesFavoritas" ADD CONSTRAINT "CancionesFavoritas_IdUsuario_fkey" FOREIGN KEY ("IdUsuario") REFERENCES "Usuario"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CancionesFavoritas" ADD CONSTRAINT "CancionesFavoritas_IdCancion_fkey" FOREIGN KEY ("IdCancion") REFERENCES "Cancion"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;

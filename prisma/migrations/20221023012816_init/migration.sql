-- CreateTable
CREATE TABLE "time" (
    "id" SERIAL NOT NULL,
    "nom_period" TEXT NOT NULL,
    "time_deb" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "time_fin" TIMESTAMP(3) NOT NULL,
    "chrono" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "time_pkey" PRIMARY KEY ("id")
);

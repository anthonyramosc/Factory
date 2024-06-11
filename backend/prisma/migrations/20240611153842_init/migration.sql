-- CreateTable
CREATE TABLE "Taste" (
    "id" SERIAL NOT NULL,
    "taste" TEXT NOT NULL,
    "description" TEXT,
    "price" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Taste_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Taste_taste_key" ON "Taste"("taste");

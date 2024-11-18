-- CreateEnum
CREATE TYPE "RequestType" AS ENUM ('Sum', 'Multiply');

-- CreateTable
CREATE TABLE "Request" (
    "id" SERIAL NOT NULL,
    "a" INTEGER NOT NULL,
    "b" INTEGER NOT NULL,
    "answer" INTEGER NOT NULL,
    "type" "RequestType" NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Request_id_key" ON "Request"("id");

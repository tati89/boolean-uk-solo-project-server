/*
  Warnings:

  - A unique constraint covering the columns `[user_ID]` on the table `Basket` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Basket_user_ID_key" ON "Basket"("user_ID");

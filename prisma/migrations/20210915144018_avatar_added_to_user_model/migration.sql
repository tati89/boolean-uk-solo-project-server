/*
  Warnings:

  - You are about to drop the column `item_Id` on the `BasketItem` table. All the data in the column will be lost.
  - Added the required column `item_ID` to the `BasketItem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `avatar` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "BasketItem" DROP CONSTRAINT "BasketItem_item_Id_fkey";

-- AlterTable
ALTER TABLE "BasketItem" DROP COLUMN "item_Id",
ADD COLUMN     "item_ID" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "avatar" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "BasketItem" ADD CONSTRAINT "BasketItem_item_ID_fkey" FOREIGN KEY ("item_ID") REFERENCES "Item"("id") ON DELETE CASCADE ON UPDATE CASCADE;

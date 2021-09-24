/*
  Warnings:

  - Added the required column `status` to the `Order` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Order" ADD COLUMN     "status" TEXT NOT NULL,
ALTER COLUMN "date" SET DEFAULT '2020-03-19 14:21:00 +02:00';

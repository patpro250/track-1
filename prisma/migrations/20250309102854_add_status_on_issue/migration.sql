/*
  Warnings:

  - Added the required column `status` to the `Issue` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Issue` ADD COLUMN `status` ENUM('OPEN', 'CLOSE', 'IV_PROGRES') NOT NULL;

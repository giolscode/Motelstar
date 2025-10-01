/*
  Warnings:

  - You are about to drop the column `reservation_date` on the `Reservation` table. All the data in the column will be lost.
  - Added the required column `nb_adultes` to the `Reservation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nb_enfants` to the `Reservation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nom_client` to the `Reservation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `prenom_client` to the `Reservation` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Reservation` DROP COLUMN `reservation_date`,
    ADD COLUMN `nb_adultes` INTEGER NOT NULL,
    ADD COLUMN `nb_enfants` INTEGER NOT NULL,
    ADD COLUMN `nom_client` VARCHAR(191) NOT NULL,
    ADD COLUMN `prenom_client` VARCHAR(191) NOT NULL;

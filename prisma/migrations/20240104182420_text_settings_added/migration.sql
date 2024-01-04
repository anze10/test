-- CreateTable
CREATE TABLE `meteoriti` (
    `id_meteorit` INTEGER NOT NULL AUTO_INCREMENT,
    `trajanje` DECIMAL(10, 2) NOT NULL,
    `dan` DATE NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `cas` TIME NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id_meteorit`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

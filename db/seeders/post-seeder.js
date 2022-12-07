"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert(
            "posts",
            [
                {
                    number: 1,
                    province: "La Pampa",
                    routeNumber: 502,
                    km: 400,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    number: 2,
                    province: "Buenos Aires",
                    routeNumber: 12,
                    km: 120,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    number: 3,
                    province: "Entre Rios",
                    routeNumber: 11,
                    km: 333,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            ],
            {}
        );
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete("posts", null, {});
    },
};

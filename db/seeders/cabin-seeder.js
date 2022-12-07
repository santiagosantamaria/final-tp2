"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert(
            "cabins",
            [
                {
                    cabinNumber: 1,
                    postId: 1,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    cabinNumber: 2,
                    postId: 1,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    cabinNumber: 3,
                    postId: 1,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    cabinNumber: 4,
                    postId: 1,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            ],
            {}
        );
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete("cabins", null, {});
    },
};

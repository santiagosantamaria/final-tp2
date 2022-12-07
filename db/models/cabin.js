"use strict";
const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    class Cabin extends Model {
        static associate(models) {}
    }

    Cabin.init(
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                allowNull: false,
                autoIncrement: true,
            },
            cabinNumber: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            postId: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },

            createdAt: {
                allowNull: false,
                type: DataTypes.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: DataTypes.DATE,
            },
        },
        {
            sequelize,
            modelName: "Cabin",
            tableName: "Cabins",
        }
    );
};

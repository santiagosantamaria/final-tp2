"use strict";
const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    class Post extends Model {
        static associate(models) {}
    }

    Post.init(
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
            },
            province: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            routeNumber: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            km: {
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
            name: "Post",
            tableName: "Posts",
        }
    );
};

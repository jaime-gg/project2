const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class Cover extends Model {}

Cover.init(
  {
    //pulling data from story model + user id + story id
    id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'story',
        key: 'id',
      },
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
    title: {
      type: DataTypes.STRING,
      references: {
        model: 'story',
        key: 'title',
      },
    },
    coverColor: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    titleColor: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    fontSize: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'cover',
  }
);

module.exports = Cover;

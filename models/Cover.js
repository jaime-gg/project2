const { Model, DataTypes } = require('sequelize');
const {
  coverColor,
  textColor,
  titleSize,
} = require('../Public/Javascript/cover');
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
      type: DataTypes.INTEGER,
      references: {
        model: 'story',
        key: 'title',
      },
    },
    coverColor: {},
    titleColor: {},
    fontSize: {},
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'story',
  }
);

module.exports = Cover;

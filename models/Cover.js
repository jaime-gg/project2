const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Cover extends Model {}

Cover.init(
  {
    story_id: {
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
    cover_color: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    title_color: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    font_size: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    font: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    border_color:{
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    border_size:{
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'cover',
  }
);

module.exports = Cover;

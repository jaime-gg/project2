const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// CREATE THE STORY MODEL
class Story extends Model {}

// CREATE THE FIELDS/COLUMNS FOR STORY MODEL
Story.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    // published: {
    //   type: DataTypes.BOOLEAN,
    //   allowNull: false,
    //   defaultValue: false
    // },
    cover_color: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    title_color: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    font_size: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    font: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    border_color:{
      type: DataTypes.STRING,
      allowNull: true,
    },
    border_width:{
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    // PULL DATA FROM USER MODEL | USER ID
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id'
      }
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'story'
  }
);

module.exports = Story;

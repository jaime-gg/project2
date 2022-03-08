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
    published: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    // PULL DATA FROM USER MODEL | USER ID
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id'
      }
    },
    cover_id:{
      type: DataTypes.INTEGER,
      reference:{
        model: 'cover',
        key:'id'
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

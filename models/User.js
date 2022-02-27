const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

// CREATE THE USER MODEL
class User extends Model {
    // ON LOGIN CHECK PASSWORD AUTHENTICATION 
    checkPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.password);
      }
}

// CREATE THE FIELDS/COLUMNS FOR USER MODEL
User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [4]
            }
        }
    },
    {
        hooks: {
            // SET UP PASSWORD PROTECTION WITH BEFORE-CREATE LIFECYCLE "HOOK" FUNCTIONALITY
            async beforeCreate(newUserData) {
              newUserData.password = await bcrypt.hash(newUserData.password, 10);
              return newUserData;
            },
            // IN CASE OF PASSWORD BEING RESET | USER PUT ROUTE 
            // async beforeUpdate(updatedUserData) {
            //   updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
            //   return updatedUserData;
            // }
        },
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user'
    }
);

module.exports = User;

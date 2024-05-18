'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    user_id: DataTypes.STRING,
    user_name: DataTypes.STRING,
    user_email: DataTypes.STRING,
    user_username:DataTypes.STRING,
    user_password:DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};


// npx sequelize-cli model:generate --name Items --attributes item_name:string,item_price:number,item_description:text

// item_id, item_name, item_price, item_description, created_at, updated_at

// npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string
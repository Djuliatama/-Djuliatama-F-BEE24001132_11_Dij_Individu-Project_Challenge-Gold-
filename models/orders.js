'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Orders extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Orders.hasMany(models.Items, {
        foreignKey: 'order_id',
        as: 'items'
      });
    }
  }
  Orders.init({
    user_id: DataTypes.INTEGER,
    item_id: DataTypes.INTEGER,
    item_quanity: DataTypes.INTEGER,
    order_status: DataTypes.STRING,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Orders',
  });
  return Orders;
};
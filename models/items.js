'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Items extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Items.belongsTo(models.Orders, {
        foreignKey: 'order_id',
        as: 'order'
      });
    }
  }
  Items.init({
    item_name: DataTypes.STRING,
    item_price: DataTypes.INTEGER,
    item_description: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Items',
  });
  return Items;
};
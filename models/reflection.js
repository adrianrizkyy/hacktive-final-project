'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class reflection extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  reflection.init({
    success: DataTypes.STRING,
    low_point: DataTypes.STRING,
    take_away: DataTypes.STRING,
    owner_id: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'reflection',
  });
  return reflection;
};
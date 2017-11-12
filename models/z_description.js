'use strict';

const bcrypt = require('bcrypt-nodejs');

module.exports = (sequelize, DataTypes) => {
  var Description = sequelize.define('description', {
    discrip_id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    post_id: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    description: {
      type: DataTypes.STRING
    },
    created_at: {
      allowNull: false,
      type: DataTypes.DATE
    }
  }, {
    timestamps: false,
    getterMethods: {

    }
  });

  return Description;
};

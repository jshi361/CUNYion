'use strict';

const bcrypt = require('bcrypt-nodejs');

module.exports = (sequelize, DataTypes) => {
  var Privilege = sequelize.define('privilege', {
    privilege_level: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    user_id: {
      type: DataTypes.INTEGER
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

  return Privilege;
};

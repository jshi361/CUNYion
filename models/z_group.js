'use strict';

const bcrypt = require('bcrypt-nodejs');

module.exports = (sequelize, DataTypes) => {
  var Group = sequelize.define('group', {
    group_id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    user_id: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    title: {
      type: DataTypes.STRING
    }
  }, {
    getterMethods: {

    }
  });

  return Group;
};

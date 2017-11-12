'use strict';

const bcrypt = require('bcrypt-nodejs');

module.exports = (sequelize, DataTypes) => {
  var Comment = sequelize.define('comment', {
    comment_id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    post_id: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    comment: {
      type: DataTypes.STRING
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
    }
  }, {
    getterMethods: {

    }
  });

  return Comment;
};

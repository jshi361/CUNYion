'use strict';

const bcrypt = require('bcrypt-nodejs');

module.exports = (sequelize, DataTypes) => {
  var Post = sequelize.define('post', {
    post_id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    discrip_id: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    user_id: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    title: {
      type: DataTypes.STRING(128)
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
    }
  }, {
    getterMethods: {

    }
  });

  return Post;
};

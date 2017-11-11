'use strict';
module.exports = function(sequelize, DataTypes) {
  var Todo = sequelize.define('Todo', {
    title: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  list(req, res) {
  return Todo
    .all()
    .then(todos => res.status(200).send(todos))
    .catch(error => res.status(400).send(error));
};
  return Todo;
};

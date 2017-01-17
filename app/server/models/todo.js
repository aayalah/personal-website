'use strict';
//node_modules/.bin/sequelize model:create --name User --attributes "email:string"
//node_modules/.bin/sequelize db:migrate
module.exports = function(sequelize, DataTypes) {
  var Todo = sequelize.define('Todo', {
    title: DataTypes.STRING,
    complete: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    UserId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Todo.belongsTo(models.User);
      }
    }
  });
  return Todo;
};

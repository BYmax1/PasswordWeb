//定义post表结构
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Info', {
    place: {
      field: 'place',
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null
    },
    account: {
      field: 'account',
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null
    },
    password: {
      field: 'password',
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null
    },
  } , {
    tableName: 'Info',
    timestamps: false,
    freezeTableName: true
  });
};
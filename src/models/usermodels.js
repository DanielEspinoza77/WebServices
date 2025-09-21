const { DataTypes } = require("sequelize");
const sequelize = require('../config/db');


const user = sequelize.define('user', {
  name: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false, unique: true },
  password: { type: DataTypes.STRING, allowNull: false }
});


const recorrido = sequelize.define("recorrido", {
  lat: { type: DataTypes.FLOAT, allowNull: false },
  lng: { type: DataTypes.FLOAT, allowNull: true },
  tiempo: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  usuarioId: { type: DataTypes.INTEGER, allowNull: false }
}, {
  tableName: "recorridos",
  timestamps: false
});
 

user.hasMany(recorrido, { foreignKey: 'usuarioId' });
recorrido.belongsTo(user, { foreignKey: 'usuarioId' });

module.exports = { user, recorrido };

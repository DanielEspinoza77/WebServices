const express = require('express');

const sequelize = require('./config/db');
const routes = require('./routes/index.js')
const Recorrido = require('./models/userModels.js')
require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());


async function startServer() {
  try {
    await sequelize.sync();
    console.log("DB is ready");

    app.listen(PORT, () => {
      console.log(`Servidor corriendo en http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error('Error al sincronizar la base de datos:', err);
  }
}

startServer();

app.use(routes.unproctectedroutes);
/*app.get('/test', async (req, res) => {
  try {
   
    const users = [
      { name: 'Fernando', cellphone: '33224455667', email: 'ferflo@gmail.com' }
    ];

    if (users.length === 0) {
      return res.status(404).json({ error: 'No se encontraron usuarios' });
    }

    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ error: 'Error interno en /test' });
  }
});
*/

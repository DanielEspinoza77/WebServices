const express = require('express');
const sequelize = require('./config/db');
const routes = require('./routes/index.js');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(routes.unproctectedroutes);

async function startServer() {
  try { 
    await sequelize.sync({ alter: true }); 
    console.log("DB is ready");

    app.listen(PORT, () => {
      console.log(`Servidor corriendo en http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error('Error al sincronizar la base de datos:', err);
  }
}

startServer();

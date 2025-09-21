const { user, recorrido } = require('../models/userModels');

const register = async (userData) => {
  try {
    const { name, email, password, lat, lng } = userData;

    console.log('Datos a registrar:', { name, email, password, lat, lng });

    if (!name || !email || !password) {
      throw new Error('Faltan datos obligatorios');
    }

    const existingUser = await user.findOne({ where: { email } });
    if (existingUser) {
      throw new Error('El email ya está registrado');
    }

    const newUser = await user.create({ name, email, password });

    if (lat !== undefined) {
      await recorrido.create({
        lat,
        lng: lng || null,
        usuarioId: newUser.id
      });
    }

    return newUser;
  } catch (error) {
    if (error.errors) {
      console.error("Errores de validación:", error.errors.map(e => e.message));
    } else {
      console.error("Error registrando usuario:", error.message);
    }
    throw error;
  }
};

module.exports = { register };

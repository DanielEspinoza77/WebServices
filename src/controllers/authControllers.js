const userServices = require('../services/userServices');
 
class AuthControllers {
  async register(req, res) {
    try {
      const user = await userServices.register(req.body);
      return res.status(201).json({ message: 'Usuario registrado', user });
    } catch (error) {
      return res.status(500).json({ error: error.message || 'Error en el registro' });
    }
  }
}

module.exports = new AuthControllers();

// controllers/authControllers.js
const userServices = require('../services/userServices');

class AuthControllers {
    async register(req, res) {
        try {
            const user = await userServices.register(req);
            return res.status(200).json({ message: 'Usuario registrado', user });
        } catch (error) {
            return res.status(500).json({ error: 'Error en el registro' });
        }
    }
}

// exportas una **instancia**
module.exports = new AuthControllers();

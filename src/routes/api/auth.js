const express = require('express');
const { body, validationResult } = require('express-validator');
const authControllers = require('../../controllers/authControllers');
const router = express.Router();

router.post(
  '/register',
  [
    body('name').notEmpty().withMessage('El nombre es obligatorio'),
    body('email').isEmail().withMessage('Email inválido'),
    body('password').notEmpty().withMessage('La contraseña es obligatoria'),
    body('lat').optional().isFloat().withMessage('Lat debe ser un número'),
    body('lng').optional().isFloat().withMessage('Lng debe ser un número')
  ],
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
  authControllers.register
);

module.exports = router;

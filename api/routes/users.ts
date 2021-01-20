import express, { Router } from 'express';
const router: Router = express.Router();
const controller = require('../controllers/users/users.controller');

router.post('/register', controller.register);
router.post('/login', controller.login);

module.exports = router;

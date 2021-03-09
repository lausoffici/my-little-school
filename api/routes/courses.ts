import express, { Router } from 'express';
const router: Router = express.Router();
const controller = require('../controllers/courses/courses.controller');

router.post('/', controller.create);
router.get('/', controller.findAll);
router.get('/:id', controller.findOne);
router.put('/:id', controller.update);
router.delete('/:id', controller.delete);

module.exports = router;

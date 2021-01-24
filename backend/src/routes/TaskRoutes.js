const express = require('express');
const router = express.Router();

const TaskController = require('../controller/TaskController');
const TaskValidation = require('../middlewares/TaskValidation');
const MacaddressValidation = require('../middlewares/MacaddressValidation');
const ParamIdValidation = require('../middlewares/ParamIdValidation');

router.post('/', TaskValidation, TaskController.create);
router.put('/:id', TaskValidation, TaskController.update);

router.get('/filter/all', MacaddressValidation, TaskController.all);
router.get('/:id', ParamIdValidation, TaskController.getById);

router.delete('/:id', TaskController.delete);
router.put('/done/:id/:done', TaskController.done);

router.get('/filter/late', MacaddressValidation, TaskController.late);
router.get('/filter/today', MacaddressValidation, TaskController.today);
router.get('/filter/week', MacaddressValidation, TaskController.week);
router.get('/filter/month', MacaddressValidation, TaskController.month);
router.get('/filter/year', MacaddressValidation, TaskController.year);


module.exports = router;
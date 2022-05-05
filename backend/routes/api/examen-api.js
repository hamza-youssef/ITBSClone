const router = require('express').Router();
const examenController = require('../../controllers/examen-controller');
const auth = require('../../middleware/auth');

// @route   GET api/examen
// @desc    Get all examen
// @access  Public
router.get('/',examenController.get)

// @route   GET api/examen
// @desc    Get examen by id
// @access  Public
router.get('/:id',examenController.getById)

// @route   GET api/examen
// @desc    Add examen
// @access  Private
router.post('/',auth,examenController.post)

// @route   GET api/examen
// @desc    Update examen
// @access  Private
router.put('/:id',auth,examenController.put)

// @route   GET api/examen
// @desc    Delete examen
// @access  Private
router.delete('/:id',auth,examenController.delete)

module.exports = router;
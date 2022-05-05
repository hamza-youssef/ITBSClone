const router = require('express').Router();
const profMatController = require('../../controllers/profMat-controller');
const auth = require('../../middleware/auth');

// @route   GET api/note
// @desc    Get prof matiere by groupe
// @access  Public
router.get('/:groupe',profMatController.getByGroupe)

// @route   GET api/note
// @desc    Get profmatiere by id
// @access  Public
router.get('/:id',profMatController.getByProf)

// @route   GET api/profMat
// @desc    Add profMat
// @access  Private
router.post('/',auth,profMatController.post)

// @route   GET api/profMat
// @desc    Update profMat
// @access  Private
router.put('/:id',auth,profMatController.put)

// @route   GET api/profMat
// @desc    Delete profMat
// @access  Private
router.delete('/:id',auth,profMatController.delete)

module.exports = router;
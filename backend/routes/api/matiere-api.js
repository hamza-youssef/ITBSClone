const router = require('express').Router();
const matiereController = require('../../controllers/matiere-controller');
const auth = require('../../middleware/auth');

// @route   GET api/matiere
// @desc    Get all matiere
// @access  Public
router.get('/',matiereController.get)

// @route   GET api/matiere
// @desc    Get matiere by id
// @access  Public
router.get('/:id',matiereController.getById)

// @route   GET api/matiere
// @desc    Add matiere
// @access  Private
router.post('/',auth,matiereController.post)

// @route   GET api/matiere
// @desc    Update matiere
// @access  Private
router.put('/:id',auth,matiereController.put)

// @route   GET api/matiere
// @desc    Delete matiere
// @access  Private
router.delete('/:id',auth,matiereController.delete)

module.exports = router;
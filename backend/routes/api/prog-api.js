const router = require('express').Router();
const progController = require('../../controllers/prog-controller');
const auth = require('../../middleware/auth');


// @route   GET api/note
// @desc    Get prog by groupe
// @access  Public
router.get('/:groupe',progController.getByGroupe)

// @route   GET api/prog
// @desc    Add prog
// @access  Private
router.post('/',auth,progController.post)

// @route   GET api/prog
// @desc    Update prog
// @access  Private
router.put('/:id',auth,progController.put)

// @route   GET api/prog
// @desc    Delete prog
// @access  Private
router.delete('/:id',auth,progController.delete)

module.exports = router;
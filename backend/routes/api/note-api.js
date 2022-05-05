const router = require('express').Router();
const noteController = require('../../controllers/note-controller');
const auth = require('../../middleware/auth');

// @route   GET api/note
// @desc    Get note by id_etudiant
// @access  Public
router.get('/:id',noteController.getById)


// @route   GET api/note
// @desc    Add note
// @access  Private
router.post('/',auth,noteController.post)

// @route   GET api/note
// @desc    Update note
// @access  Private
router.put('/:id',auth,noteController.put)

// @route   GET api/note
// @desc    Delete note
// @access  Private
router.delete('/:id',auth,noteController.delete)

module.exports = router;
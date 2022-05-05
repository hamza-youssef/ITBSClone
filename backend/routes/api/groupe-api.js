const router = require('express').Router();
const groupeController = require('../../controllers/groupe-controller');
const auth = require('../../middleware/auth');

// @route   GET api/groupe
// @desc    Get all groupe
// @access  Public
router.get('/',groupeController.get)

// @route   GET api/groupe
// @desc    Get groupe by id
// @access  Public
router.get('/:id',groupeController.getById)

// @route   GET api/groupe
// @desc    Add groupe
// @access  Private
router.post('/',auth,groupeController.post)

// @route   GET api/groupe
// @desc    Update groupe
// @access  Private
router.put('/:id',auth,groupeController.put)

// @route   GET api/groupe
// @desc    Delete groupe
// @access  Private
router.delete('/:id',auth,groupeController.delete)

module.exports = router;
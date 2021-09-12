const express = require('express');
const router = express.Router();

const movieController = require('../movieController');

router.get('/',movieController.listAll);
router.get('/:_id', movieController.searchById);
router.post('/',movieController.save);
router.put('/ : _id',movieController.update);
router.delete('/:_id',movieController.deleteById);

module.exports=router;